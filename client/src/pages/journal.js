import React, { Component } from 'react';
import API from "../utils/API";
import PageWrapper from '../components/PageWrapper';
import DeleteBtn from '../components/DeleteBtn';
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import "./journal.css";
import { Input, TextArea, FormBtn } from "../components/Form";

class Journal extends Component {
    state = {
        entries: [],
        title: "",
        synopsis: ""
    };

    componentDidMount() {
        this.loadJournal();
    };

    loadJournal = () => {
        API.getJournal()
            .then(res =>
                this.setState({ entries: res.data, title: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };

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
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.synopsis) {
            API.saveJournal({
                title: this.state.title,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadJournal())
                .catch(err => console.log(err));
        }
    };
    render() {
        return (
            <PageWrapper>
                <div className="container pt-3">
                    <div className="journal-entry">
                        <h1>Personal Journal</h1>
                        <h2>Take note of an event below</h2>
                        <form>
                            <Input
                                name="journalTitle"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                placeholder="Journal Entry Title (Required)"
                            />
                            <TextArea
                                name="journalSynopsis"
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
                                    {this.state.entries.map(entries => (
                                        <ListItem key={entries._id}>
                                            <Link to={"/journals/" + entries._id}>
                                                <strong>
                                                    {entries.title}
                                                </strong>
                                                {entries.synopsis}
                                            </Link>
                                            <DeleteBtn onClick={() => this.deleteJournal(entries._id)} />
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
