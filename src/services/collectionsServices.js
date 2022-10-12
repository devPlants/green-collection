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
    getByUserIdPaginate: async (id, _rows, _page, status) => {
        const rows = _rows;
        const page = rows * (_page - 1);
        const count = await collections.countCollection(id, status);

        if (count.status > 300) return count;

        const products = await collections.getByUserId(id, rows, page, status);

        if (products.status > 300) return products;

        for (prod of products.response) {
            prod.total = count.response[0].count;
        }

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
    searchPaginate: async (data) => {
        const rows = data.rows;
        const _page = rows * (data.page - 1);
        data.page = _page;

        const products = await collections.search(data);

        if (products.status > 300) return products;

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
