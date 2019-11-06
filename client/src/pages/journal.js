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
                .then(res => this.loadTitle())
                .catch(err => console.log(err));
        }
    };
    render() {
        return (
            <PageWrapper>
                <div className="container pt-3">
                    <div className="journal-entry">
                        <h2>Journal Entry</h2>
                        <p>Take note of an event below</p>
                        <form>
                            <Input
                                className="journalEntryTitle"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                placeholder="Journal Entry Title"
                            />
                            <TextArea
                                className="journalEntryText"
                                value={this.state.synopsis}
                                onChange={this.handleInputChange}
                                placeholder="Add Journal Entry Here"
                            />
                            <FormBtn
                                disabled={!(this.state.title && this.state.synopsis)}
                                onClick={this.handleFormSubmit}
                            >
                                Add Post
                      </FormBtn>
                        </form>
                        <div className="journal-entry-list">
                            <p>All Journal Entries</p>
                            {this.state.entries.length ? (
                                <List>
                                    {this.state.entries.map(journal => (
                                        <ListItem key={journal._id}>
                                            <Link to={"api/journals/" + journal._id}>
                                                <strong>
                                                    {journal.title} by {journal.synopsis}
                                                </strong>
                                            </Link>
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
