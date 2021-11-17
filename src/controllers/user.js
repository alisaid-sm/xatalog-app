const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validate = require('../middleware/validator');
const { body } = require('express-validator');
const User = require('../models').User;
const JWT_KEY = process.env.JWT_KEY || 'dfc36a50';

module.exports = {
    login: [
        validate([
            body('email').isEmail()
        ]),
        async (req, res) => {
            try {
                const data = await User.findOne({where: {email: req.body.email}});
                if (!data) return res.status(400).json({code: 400, message: 'Not Registered'});
                if (!bcrypt.compareSync(req.body.password, data.dataValues.password)) return res.status(400).json({code: 400, message: 'Wrong Password'});
                data.dataValues.token = jwt.sign({id: data.dataValues.id}, JWT_KEY);
                delete data.dataValues.password;
                return res.status(200).json({code: 200, data});
            } catch (error) {
                return res.status(500).json({code: 500, message: error.message});
            }
        }
    ],
    register: [
        validate([
            body('email').notEmpty().isEmail(),
            body('username').notEmpty().isString(),
            body('password').notEmpty().isString()
        ]),
        async (req, res) => {
            try {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
                const data = await User.create({
                    email: req.body.email,
                    username: req.body.username,
                    password: hash
                });
                delete data.dataValues.password;
                return res.status(200).json({code: 200, data});
            } catch (error) {
                return res.status(500).json({code: 500, message: error.message});
            }
        }
    ],
    myprofile: [
        async (req, res) => {
            try {
                const data = await User.findOne({where: {id: req.headers.permissions.id}});
                delete data.dataValues.password;
                return res.status(200).json({code: 200, data});
            } catch (error) {
                return res.status(500).json({code: 500, message: error.message});
            }
        }
    ]
}