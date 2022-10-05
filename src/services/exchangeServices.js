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

        const updateStatusOne = collectionsServices.updateStatus({
            userId: data.userId1,
            productId: data.product_id1,
            status: "in_exchange",
        });
        if (updateStatusOne.status > 300) return updateStatusOne;

        const updateStatusTwo = collectionsServices.updateStatus({
            userId: data.userId2,
            productId: data.product_id2,
            status: "in_exchange",
        });
        if (updateStatusTwo.status > 300) return updateStatusTwo;

        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request",
            };
        }

        const create = await exchanges.create(data);

        return create;
    },
    getExchangesByUser: async (id) => {
        const exchanges = [];
        const getExchanges = await exchanges.getById(id);

        if (getExchanges.status > 300) return getExchanges;

        getExchanges.response.forEach(async (element) => {
            const user1 = await collectionsServices.getByProductId(
                element.product_id1
            );
            const user2 = await collectionsServices.getByProductId(
                element.product_id2
            );

            if (user1.status > 300) return user1;

            if (user2.status > 300) return user2;

            exchanges.push({
                user1: user1.response[0],
                user2: user2.response[0],
                status: element.status,
            });
        });

        return { status: 200, response: exchanges };
    },
};

module.exports = exchangesServices;
