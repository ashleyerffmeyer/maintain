import axios from "axios";

export default {
    // Gets all entries
    getJournals: function (email) {
        if (!email) { throw Error('Email is missing...') }
        return axios.get(`/api/journals/${email}`);
    },
    // Gets the entry with the given id
    getJournal: function (id) {
        return axios.get("/api/journals/" + id);
    },
    // Deletes the journal entries with the given id
    deleteJournal: function (id) {
        return axios.delete("/api/journals/" + id);
    },
    // Saves a journal entry to the database
    saveJournal: function (journalData) {
        return axios.post("/api/journals", journalData);
    }
};