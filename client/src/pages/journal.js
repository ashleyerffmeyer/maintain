import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';
import Input from '../components/Input';
import { List, ListItem } from "../components/List";
import "./journal.css";

class Journal extends Component {
    state = {
        journal: [],
        title: "",
        date: "",
        entry: "",
    };

    componentDidMount() {
        this.loadJournal();
    };

    loadJournal = () => {
        getJournal()
            .then(res =>
                this.setState({ journal: res.data, title: "", date: "", entry: "" })
            )
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
        if (this.state.title && this.state.entry) {

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
                                value={this.state.journalEntryTitle}
                                onChange={this.handleInputChange}
                                placeholder="Journal Entry Title"
                            />
                            <Input
                                className="journalEntryText"
                                value={this.state.journalEntryText}
                                onChange={this.handleInputChange}
                                placeholder="Add Journal Entry Here"
                            />
                            <Button
                                onClick={this.handleFormSubmit}
                                type="success"
                                className="input-lg"
                            >
                                Search
                      </Button>
                        </form>
                        <div className="journal-entry-list">
                            <p>All Journal Entries</p>
                            {this.state.journal.length ? (
                                <List>
                                    {this.state.journal.map(journal => (
                                        <ListItem key={journal._id}>
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                    <h3>No Results to Display</h3>
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