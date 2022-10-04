const validations = require("../validations/productValidations.js");
const products = require("../repositories/products.js");

const ProductServices = {
    saveProduct: async (data) => {
        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request"
            };
        }
        const create = await products.create(data);

        return create;
    },
    getProductId: async (id) => {
        const getProduct = await products.getProductById(id);

        return getProduct;
    },
    updateProductId: async (data) => {
        const updateProduct = await products.updateProduct(data);

        return updateProduct;
    },
    deleteProduct: async (id) => {
        const deleteProduct = await products.deleteProduct(id);

        return deleteProduct;
    },
};

module.exports = ProductServices;
