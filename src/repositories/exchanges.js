const db = require("../database/index.js");

const exchanges = {
    create: async (data) => {
        const values = [
            data.userId1,
            data.productId1,
            data.userId2,
            data.productId2,
        ];
        try {
            const client = await db;
            const createExchanges = await client.query(
                `
                INSERT INTO exchanges (user_id1, product_id1, user_id2, product_id2)
                VALUES ($1, $2, $3, $4);
                `,
                values
            );

            return { status: 201, response: "Exchanges created" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    getById: async (id) => {
        try {
            const client = await db;
            const getExchanges = await client.query(
                `
                SELECT * FROM exchanges WHERE user_id1 = $1 OR user_id2 = $1;
                `,
                [id]
            );

            return { status: 200, response: getExchanges.rows };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
};

module.exports = exchanges;