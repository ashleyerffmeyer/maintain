// Ensuring that all models are required
const models = require("../models")
const { hashPassword } = require('../lib/bcrypt-helper')

exports.getUser = (req, res) => {
    if (!req.params.id) {
        res.status(400).json({
            status: 'Bad Request',
            data: null,
            detail: "Missing request body",
            code: 400
        });
    }

    models.User.find({})
        .then((response) => {
            res.json({
                status: 'OK',
                data: {
                    token: ''
                },
                detail: null,
                code: 201
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                data: null,
                detail: err.message,
                code: 500
            });
        });
};

exports.createUser = async (req, res) => {
    const { user, name, passwd } = req.body

    if (!user || !name || !passwd) {
        res.status(400).json({
            status: 'Bad Request',
            data: null,
            detail: "Missing request body",
            code: 400
        });
    }

    const hash = await hashPassword(passwd)
    const data = {
        user,
        name,
        passwd: hash
    }

    models.User.create(data)
        .then((response) => {
            res.status(201).json({
                status: 'Created',
                data: {
                    id: response._id,
                    user,
                    name
                },
                detail: null,
                code: 201
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                data: null,
                detail: err.message,
                code: 500
            });
        });
};

exports.deleteUser = (req, res) => {
    models.User.deleteOne({ _id: req.params.id })
    .then((result) => {
        res.status(202).json({
            status: 'Accepted',
            data: null,
            detail: null,
            code: 202
        });
    }).catch((err) => {
        res.status(500).json({
            status: 'error',
            data: null,
            detail: err.message,
            code: 500
        });
    });
};
