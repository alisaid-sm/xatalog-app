const Product = require('../models').Product;
module.exports = {
    getAll: [
        async (req, res) => {
            try {
                const data = await Product.findAll();
                return res.status(200).json({code: 200, data});
            } catch (error) {
                return res.status(500).json({code: 500, message: error.message});
            }
        }
    ],
    getOne: [
        async (req, res) => {
            try {
                const data = await Product.findOne({where: {id: req.params.id}});
                return res.status(200).json({code: 200, data});
            } catch (error) {
                return res.status(500).json({code: 500, message: error.message});
            }
        }
    ],
    create: [
        async (req, res) => {
            try {
                const data = await Product.create(req.body);
                return res.status(200).json({code: 200, data});
            } catch (error) {
                return res.status(500).json({code: 500, message: error.message});
            }
        }
    ],
    update: [
        async (req, res) => {
            try {
                const data = await Product.update(req.body, {where: {id: req.params.id}});
                return res.status(200).json({code: 200, data});
            } catch (error) {
                return res.status(500).json({code: 500, message: error.message});
            }
        }
    ],
    delete: [
        async (req, res) => {
            try {
                const data = await Product.destroy({where: {id: req.params.id}});
                return res.status(200).json({code: 200, data});
            } catch (error) {
                return res.status(500).json({code: 500, message: error.message});
            }
        }
    ]
}