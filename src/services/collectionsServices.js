const collections = require("../repositories/collections.js");
const validations = require("../validations/collectionValidations.js");

const collectionsServices = {
    saveCollection: async (data) => {
        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request",
            };
        }

        const create = await collections.create(data);

        return create;
    },
    getByProductId: async (id) => {
        const products = await collections.getByProductId(id);

        return products;
    },
    getByStatus: async (_status) => {
        const data = { status: _status };
        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request",
            };
        }
        const products = await collections.getByStatus(data.status);

        return products;
    },
    updateStatus: async (data) => {
        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request",
            };
        }

        const updateUser = await collections.updateStatus(data);

        return updateUser;
    },
    deleteUser: async (data) => {
        const deleteUser = await collections.deleteCollection(data);

        return deleteUser;
    },
};

module.exports = collectionsServices;
