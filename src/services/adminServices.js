const collectionsServices = require("./collectionsServices");

module.exports = adminServices = {
    getPending: async () => {
        const status = "pending";
        const pending = await collectionsServices.getByStatus(status);

        return pending;
    },
    updateCollectionStatus: async (data) => {
        if (data.status != "approved" && data.status != "rejected") {
            return { status: 400, response: "status invalid" };
        }

        const update = await collectionsServices.updateStatus(data);
        return update;
    },
};
