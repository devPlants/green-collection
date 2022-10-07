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
    updateApproved: async (data) => {
        const date = new Date();

        try {
            const client = await db;

            await client.query("BEGIN;");

            await client.query(
                `UPDATE collections SET user_id = $1, status = $2 WHERE user_id = $3 AND product_id = $4;`,
                [data.userId1, "approved", data.userId2, data.productId2]
            );

            await client.query(
                `UPDATE collections SET user_id = $3, status = $2 WHERE user_id = $1 AND product_id = $4;`,
                [data.userId1, "approved", data.userId2, data.productId1]
            );

            await client.query(
                `UPDATE exchanges SET status = $1, updated_at = $2 WHERE id = $3;`,
                ["approved", date, data.id]
            );

            await client.query("COMMIT;");

            return { status: 204, response: "update Ok" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    updateRejected: async (data) => {
        const date = new Date();

        try {
            const client = await db;

            await client.query("BEGIN;");

            await client.query(
                `UPDATE collections SET status = $1 WHERE user_id = $2 AND product_id = $3;`,
                ["approved", data.userId2, data.productId2]
            );

            await client.query(
                `UPDATE collections SET status = $1 WHERE user_id = $2 AND product_id = $3;`,
                ["approved", data.userId1, data.productId1]
            );

            await client.query(
                `UPDATE exchanges SET status = $1, updated_at = $2 WHERE id = $3;`,
                ["rejected", date, data.id]
            );

            await client.query("COMMIT;");

            return { status: 204, response: "update Ok" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
};

module.exports = exchanges;
