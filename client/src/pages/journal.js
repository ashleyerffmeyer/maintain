import React, { Component } from 'react';
import API from "../utils/API";
import PageWrapper from '../components/PageWrapper';
import DeleteBtn from '../components/DeleteBtn';
//import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import "./journal.css";
import { Input, TextArea, FormBtn } from "../components/Form";

class Journal extends Component {
    state = {
        entries: [],
        title: "",
        synopsis: "",
        profile: null,
        error: ""
    };

    componentDidMount() {
        this.loadUserProfile();
    };

    loadJournals = () => {
        API.getJournals()
            .then((res) =>
                this.setState({ entries: res.data, title: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };

    loadUserProfile() {
        this.props.auth.getProfile((profile, error) =>
            this.setState(
                { profile, error },
                this.loadJournals
            )
        );
    }

    deleteJournal = id => {
        API.deleteJournal(id)
            .then(res => this.loadJournal())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value

        });
        console.log(this.state);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.synopsis) {
            API.saveJournal({
                title: this.state.title,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadJournals())
                .catch(err => console.log(err));
        }
    };
    render() {
        const { profile } = this.state;
        if (!profile) return null;
        return (
            <PageWrapper>
                <h1>Profile</h1>
                <p>Name : {profile.name}</p>
                <p>Nick Name : {profile.nickname}</p>
                <p>Email : {profile.email}</p>
                <img
                    style={{ maxWidth: 200, maxHeight: 200 }}
                    src={profile.picture}
                    alt="profile pic"
                />

                <div className="container pt-3">
                    <div className="journal-entry">
                        <h1>Personal Journal</h1>
                        <h2>Take note of an event below</h2>
                        <form>
                            <Input
                                name="title"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                placeholder="Journal Entry Title (Required)"
                            />
                            <TextArea
                                name="synopsis"
                                value={this.state.synopsis}
                                onChange={this.handleInputChange}
                                placeholder="Journal Entry Synopsis (Required)"
                            />
                            <FormBtn
                                disabled={!(this.state.title && this.state.synopsis)}
                                onClick={this.handleFormSubmit}
                            >
                                Add Journal Entry
                            </FormBtn>
                        </form>
                        <br></br>
                        <br></br>
                        <div className="journal-entry-list">
                            <h2>All Journal Entries</h2>
                            {this.state.entries.length ? (
                                <List>
                                    {this.state.entries.map(journal => (
                                        <ListItem key={journal._id}>
                                            {/* <Link to={"/journals/" + journal._id}> */}
                                            <strong>
                                                {journal.title}
                                            </strong>
                                            {journal.synopsis}
                                            {/* </Link>*/}
                                            <DeleteBtn onClick={() => this.deleteJournal(journal._id)} />
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                    <p>No Entries to Display</p>
                                )}
                        </div>
                    </div>

                    {/*  <div className="contentarea">
                    <h2>Image Capture</h2>
                    <p>Add any images below that are associated with this journal entry</p>
                    <div className="camera">
                        <button id="startbutton">Take photo</button>
                    </div>
                    <canvas id="canvas"></canvas>
                    <div className="output"><img id="photo" alt="The screen capture will appear in this box."></img></div>
    </div>*/}
                </div>
            </PageWrapper>
        );
    }
}

export default Journal;
