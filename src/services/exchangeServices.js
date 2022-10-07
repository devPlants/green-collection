const exchanges = require("../repositories/exchanges.js");
const validations = require("../validations/exchangeValidations.js");
const collectionsServices = require("./collectionsServices.js");

const exchangesServices = {
    saveExchange: async (data) => {
        const userId2 = await collectionsServices.getByProductId(
            data.productId2
        );

        if (userId2.status > 300) return userId2;

        data.userId2 = userId2.response[0].user_id;

        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request",
            };
        }

        const updateStatusOne = collectionsServices.updateStatus({
            userId: data.userId1,
            productId: data.productId1,
            status: "in_exchange",
        });
        if (updateStatusOne.status > 300) return updateStatusOne;

        const updateStatusTwo = collectionsServices.updateStatus({
            userId: data.userId2,
            productId: data.productId2,
            status: "in_exchange",
        });
        if (updateStatusTwo.status > 300) return updateStatusTwo;

        const create = await exchanges.create(data);

        return create;
    },
    getExchangesByUser: async (id) => {
        const allExchanges = [];
        const getExchanges = await exchanges.getById(id);

        if (getExchanges.status > 300) return getExchanges;

        for (change of getExchanges.response) {
            const user1 = await collectionsServices.getByProductId(
                change.product_id1
            );

            if (user1.status > 300) return user1;

            const user2 = await collectionsServices.getByProductId(
                change.product_id2
            );

            if (user2.status > 300) return user2;

            allExchanges.push({
                user1: user1.response[0],
                user2: user2.response[0],
                status: change.status,
            });
        }

        return { status: 200, response: allExchanges };
    },
    update: async (data) => {
        const userId2 = await collectionsServices.getByProductId(
            data.productId2
        );

        if (userId2.status > 300) return userId2;

        data.userId2 = userId2.response[0].user_id;

        if (data.status === "rejected") {
            const rejected = await exchanges.updateRejected(data);

            if (rejected.status > 300) return rejected;

            return rejected;
        }

        const approve = await exchanges.updateApproved(data);

        if (approve.status > 300) return approve;

        return approve;
    },
};

module.exports = exchangesServices;
