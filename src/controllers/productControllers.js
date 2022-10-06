const ProductServices = require("../services/productServices");
const auth = require("./auth");

const ProductControllers = {
    create: async (req, res) => {
        const data = req.body;
        data.photo = req.file.filename;
        const saveProduct = await ProductServices.saveProduct(data, req.userId);

        if (saveProduct.status > 300) {
            return res.status(saveProduct.status).json({
                message: saveProduct.response,
            });
        }

        res.status(201).json({
            id: saveProduct.response,
            collection: saveProduct.collection,
        });
    },
    get: async (req, res) => {
        const id = req.params.id;
        const product = await ProductServices.getProductId(id);

        if (product.status > 300) {
            return res.status(product.status).json({
                message: product.response,
            });
        }

        res.status(200).json(product.response);
    },
    getAll: async (req, res) => {
        const products = await ProductServices.getProducts(req.userId);

        if (products.status > 300) {
            return res.status(products.status).json({
                message: products.response,
            });
        }

        res.status(200).json(products.response);
    },
    update: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const date = new Date();

        data.updated_at = date;
        data.id = id;

        const update = await ProductServices.updateProductId(data, req.userId);

        if (update.status > 300) {
            return res.status(update.status).json({
                message: update.response,
            });
        }

        res.status(204).send();
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const del = await ProductServices.deleteProduct(id, req.userId);

        if (del.status > 300) {
            return res.status(del.status).json({
                message: del.response,
            });
        }

        res.status(204).send();
    },
};

module.exports = ProductControllers;
