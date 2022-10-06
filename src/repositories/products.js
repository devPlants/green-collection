const db = require("../database/index.js");
const collections = require("./collections.js");

const Products = {
    create: async (data, userId) => {
        const values = [data.name, data.category, data.description, data.photo];
        try {
            const client = await db;
            const createProducts = await client.query(
                `
                INSERT INTO products (name, category, description, photo)
                VALUES ($1, $2, $3, $4) RETURNING id;
                `,
                values
            );
            const resCollection = await collections.create({
                userId: userId,
                productId: createProducts.rows[0].id,
            });

            return {
                status: 201,
                response: createProducts.rows[0].id,
                collection: `${resCollection.response}`,
            };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    getProductsById: async (id) => {
        try {
            const client = await db;
            const getProducts = await client.query(
                `
                SELECT id, name, category, photo, description FROM products WHERE id = $1 AND deleted = false;
                `,
                [id]
            );
            return { status: 200, response: getProducts.rows };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    getProducts: async (userId) => {
        try {
            const client = await db;
            const userAdmin = (
                await client.query(
                    `
                SELECT admin FROM users WHERE id = '${userId}';
                `
                )
            ).rows[0].admin;

            if (userAdmin != true) {
                return { status: 401 };
            }

            const getProducts = await client.query(
                `
                SELECT id, name, category, photo, description FROM products WHERE deleted = false;
                `
            );
            return { status: 200, response: getProducts.rows };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    updateProduct: async (data, userId) => {
        try {
            const client = await db;

            const productOwner = (
                await client.query(
                    `
                SELECT user_id FROM collections WHERE product_id = '${data.id}';
                `
                )
            ).rows[0].user_id;

            if (productOwner != userId) {
                return { status: 401 };
            }

            const helpQuery = {
                columns: "",
                count: 0,
                values: [],
            };

            for (const column in data) {
                helpQuery.count++;
                if (column != "id") {
                    helpQuery.columns += ` ${column}=$${helpQuery.count},`;
                }
                helpQuery.values.push(data[column]);
            }

            const queryReplace = `UPDATE products SET/ WHERE id=$${helpQuery.count};`;
            const sql = queryReplace.replace(
                "/",
                helpQuery.columns.slice(0, -1)
            );

            await client.query(sql, helpQuery.values);

            return { status: 204, response: "Products updated" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    deleteProducts: async (id, userId) => {
        try {
            const date = new Date();
            const client = await db;

            const productOwner = (
                await client.query(
                    `
                SELECT users_id FROM collections WHERE products_id = '${id}';
                `
                )
            ).rows[0].users_id;

            if (productOwner != userId) {
                return { status: 401 };
            }

            const getProducts = await client.query(
                `
                UPDATE products SET deleted=$1, deleted_at=$2 WHERE id=$3;
                `,
                [true, date, id]
            );

            return { status: 204, response: "Products deleted" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
};

module.exports = Products;
