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
    getByProductId: async (id) => {
        try {
            const client = await db;
            const query = `
                SELECT user_id, product_id, p.name as product_name, p.category, p.photo  as product_photo, 
                p.description, p.created_at, u.name as user_name, u.photo as user_photo, 
                u.city as user_city, u.state as user_state 

                FROM collections c
                INNER JOIN products p
                ON c.product_id = p.id
                               
                INNER JOIN users u
                ON c.user_id = u.id
                WHERE c.product_id = $1;
                `;

            const getCollections = await client.query(query, [id]);

            return { status: 200, response: getCollections.rows };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    getByStatus: async (status) => {
        try {
            const client = await db;
            const query = `
                SELECT user_id, product_id, c.status, p.name as product_name, p.category, p.photo  as product_photo, 
                p.description, u.name as user_name, u.photo as user_photo, 
                u.city as user_city, u.state as user_state 

                FROM collections c
                INNER JOIN products p
                ON c.product_id = p.id
                               
                INNER JOIN users u
                ON c.user_id = u.id
                WHERE c.status = $1 ORDER BY p.created_at;
                `;

            const getCollections = await client.query(query, [status]);

            return { status: 200, response: getCollections.rows };
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
