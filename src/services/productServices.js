const validations = require("../validations/productValidations.js");
const products = require("../repositories/products.js");

const ProductServices = {
    saveProduct: async (data, userId) => {
        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request"
            };
        }
        const create = await products.create(data, userId);

        return create;
    },
    getProductId: async (id) => {
        const getProduct = await products.getProductsById(id);

        return getProduct;
    },
    getProducts: async (userId) => {
        const getProduct = await products.getProducts(userId);

        return getProduct;
    },
    updateProductId: async (data, userId) => {
        const updateProduct = await products.updateProduct(data, userId);

        return updateProduct;
    },
    deleteProduct: async (id, userId) => {
        const deleteProduct = await products.deleteProducts(id, userId);

        return deleteProduct;
    },
};

module.exports = ProductServices;
