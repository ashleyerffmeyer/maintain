// Ensuring that all models are required
const models = require("../models")
const { hashPassword, compareHash } = require('../lib/bcrypt-helper')
const { createToken } = require('../lib/jwt-auth')

exports.getUser = (req, res) => {
    const { user, passwd } = req.body

    if (!user || !passwd) {
        res.status(400).json({
            status: 'Bad Request',
            data: null,
            detail: "Missing request body or params",
            code: 400
        });
    }

    models.User.find({ user })
        .then((resp) => {
            if (!resp.length) {
                return res.status(401).json({
                    status: 'Unauthorized',
                    data: null,
                    detail: 'User not found',
                    code: 401
                });
            }

            const userModel = resp[0]
            const token = createToken({
                id: userModel._id,
                user,
                name: userModel.name
            })

            compareHash(userModel.passwd, passwd)
                .then((isValid) => {
                    res.json({
                        status: 'OK',
                        data: { token },
                        detail: null,
                        code: 201
                    });
                })
                .catch((err) => {
                    res.status(401).json({
                        status: 'Unauthorized',
                        data: null,
                        detail: err.message,
                        code: 401
                    });
                })
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
    const { id } = req.params

    models.User.deleteOne({ _id: id })
    .then((resp) => {
        console.log(resp)

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
