// Ensuring that all models are required
var db = require("../models");

exports.getJournal = (req, res) => {
    /**const payload = req.authorize()
     if (!payload) {
         res.status(401).json({
             status: 'Unauthorized',
             data: null,
             detail: "Bad Token",
             code: 401
         });
     }
 
     const { id } = payload */


    db.Journal.find({ userId: id })
        .then(function (dbJournal) {
            res.json(dbJournal);
        })
        .catch(function (err) {
            res.json(err);
        });
};


exports.saveJournal = (req, res) => {
    /**const payload = req.authorize()
    if (!payload) {
        res.status(401).json({
            status: 'Unauthorized',
            data: null,
            detail: "Bad Token",
            code: 401
        });
    }

    const { id } = payload*/

    db.Journal.create({ ...req.body, userId: id })
        .then(
            (response) => {
                res.status(202).json({
                    status: 'Accepted',
                    data: response,
                    detail: null,
                    code: 202
                });
            }
        ).catch((err) => {
            res.json(err);
        });
};


exports.deleteJournal = (req, res) => {
    db.Journal.deleteOne({ _id: req.params.id }).then(function (deletedJournal) {
        res.json("Journal deleted successfully!");

    }).catch(function (err) {
        res.json(err);
    });
};
