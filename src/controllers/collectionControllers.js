const collectionServices = require("../services/collectionsServices");

const collectionControllers = {
    getUserPagination: async (req, res) => {
        const userId = req.userId;
        const { rows, page } = req.query;

        const collections = await collectionServices.getByUserIdPaginate(
            userId,
            rows,
            page
        );

        if (collections.status > 300) {
            return res.status(collections.status).json({
                message: collections.response,
            });
        }

        res.status(200).json(collections.response);
    },
    searchByPaginate: async (req, res) => {
        const data = req.query;

        const collections = await collectionServices.searchPaginate(data);

        if (collections.status > 300) {
            return res.status(collections.status).json({
                message: collections.response,
            });
        }

        res.status(200).json(collections.response);
    },
};

module.exports = collectionControllers;
