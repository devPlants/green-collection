const ProductServices = require("../services/productServices");

const ProductControllers = {
    create: async (req, res) => {
        const data = req.body;
        data.photo = req.file.filename;
        const saveProduct = await ProductServices.saveProduct(data);

        if (saveProduct.status > 300) {
            return res.status(saveProduct.status).json({
                message: saveProduct.response,
            });
        }

        res.status(201).json({ id: saveProduct.response });
    },
    get: async (req, res) => {
        const id = req.params.id;
        const user = await ProductServices.getUserId(id);

        if (user.status > 300) {
            return res.status(user.status).json({
                message: user.response,
            });
        }

        res.status(200).json(user.response);
    },
    update: async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        data.id = id;

        const update = await ProductServices.updateUserId(data);

        if (update.status > 300) {
            return res.status(update.status).json({
                message: update.response,
            });
        }

        res.status(204).send();
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const del = await ProductServices.deleteUser(id);

        if (del.status > 300) {
            return res.status(del.status).json({
                message: del.response,
            });
        }

        res.status(204).send();
    },
};

module.exports = ProductControllers;
