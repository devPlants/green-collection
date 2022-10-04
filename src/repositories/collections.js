const db = require("../database/index.js");

const collections = {
    create: async (data) => {
        const values = [data.userId, data.productId];
        try {
            const client = await db;
            const createCollections = await client.query(
                `
                INSERT INTO collections (user_id, product_id)
                VALUES ($1, $2);
                `,
                values
            );

            return { status: 201, response: "collections created" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    updateStatus: async (data) => {
        try {
            const client = await db;

            const updateStatus = await client.query(
                `
                UPDATE collections SET status = $1 WHERE user_id= $2 AND product_id = $3;
                `,
                [data.status, data.userId, data.productId]
            );

            return { status: 201, response: "collections created" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    deleteCollection: async (data) => {
        try {
            const client = await db;
            const deleteCollection = await client.query(
                `
                DELETE collections WHERE user_id = $1 AND product_id = $2;
                `,
                [data.userId, data.productId]
            );

            return { status: 204, response: "Collection deleted" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
};

module.exports = collections;
