const db = require("../database/index.js");

const Products = {
    create: async (data) => {
        const values = [
            data.name,
            data.category,
            data.description,
            data.photo,
            data.user_id,
        ];
        try {
            const client = await db;
            const createProducts = await client.query(
                `
                INSERT INTO products (name, category, description, photo)
                VALUES ($1, $2, $3, $4) RETURNING id;
                `,
                values
            );

            // const createCollections = await client.query(
            //     `
            //     INSERT INTO collections (user_id, product_id)
            //     VALUES ($5, ${createProducts.rows[0].id}) RETURNING id;
            //     `,
            //     values
            // );

            return { status: 201, response: createProducts.rows[0].id };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    getProductsById: async (id) => {
        try {
            const client = await db;
            const getProducts = await client.query(
                `
                SELECT id, photo, email, cpf, name, admin, phone_number, zip_code, address, number, city, state FROM Productss WHERE id = $1 AND deleted = false;
                `,
                [id]
            );

            return { status: 200, response: getProducts.rows };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    updateProducts: async (data) => {
        try {
            const client = await db;
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
    deleteProducts: async (id) => {
        try {
            const date = new Date();
            const client = await db;
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
