const adminServices = require("../services/adminServices.js");

const adminControllers = {
    getCollectionPending: async (req, res) => {
        const collections = await adminServices.getPending();

        if (collections.status > 300) {
            return res.status(collections.status).json({
                message: collections.response,
            });
        }

        res.status(200).json(collections.response);
    },
    updateCollectionStatus: async (req, res) => {
        const data = req.body;

        const update = await adminServices.updateCollectionStatus(data);

        if (update.status > 300) {
            return res.status(update.status).json({
                message: update.response,
            });
        }

        res.status(204).end();
    },
};

module.exports = adminControllers;
