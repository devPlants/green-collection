const db = require("../database/index.js");

const Users = {
    create: async (data) => {
        const values = [
            data.name,
            data.email,
            data.password,
            data.cpf,
            data.phoneNumber,
            data.zipCode,
            data.address,
            data.number,
            data.city,
            data.state,
            data.photo,
        ];
        try {
            const client = await db;
            const createUser = await client.query(
                `
                INSERT INTO users (name, email, password, cpf, phone_number, zip_code, address, number, city, state, photo)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;
                `,
                values
            );

            return { status: 201, response: createUser.rows[0].id };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    getAllUsers: async () => {
        try {
            const client = await db;
            const getUsers = await client.query(
                `
                SELECT id, photo, email, cpf, name, admin, phone_number, zip_code, address, number, city, state FROM users WHERE deleted = false;
                `
            );

            return { status: 200, response: getUsers.rows };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    getUserById: async (id) => {
        try {
            const client = await db;
            const getUser = await client.query(
                `
                SELECT id, photo, email, cpf, name, admin, phone_number, zip_code, address, number, city, state FROM users WHERE id = $1 AND deleted = false;
                `,
                [id]
            );

            return { status: 200, response: getUser.rows };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    getUserByEmail: async (email) => {
        try {
            const client = await db;
            const getUser = await client.query(
                `
                SELECT id, email, password, admin, photo, name FROM users WHERE email = $1 AND deleted = false;
                `,
                [email]
            );

            if (!getUser.rows.length) {
                return { status: 400, response: "Email not registered" };
            }

            return { status: 200, response: getUser.rows };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    updateUser: async (data) => {
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

            const queryReplace = `UPDATE users SET/ WHERE id=$${helpQuery.count};`;
            const sql = queryReplace.replace(
                "/",
                helpQuery.columns.slice(0, -1)
            );

            console.log(sql, helpQuery.values);

            await client.query(sql, helpQuery.values);

            return { status: 204, response: "User updated" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
    deleteUser: async (id) => {
        try {
            const date = new Date();
            const client = await db;
            const getUser = await client.query(
                `
                UPDATE users SET deleted=$1, deleted_at=$2 WHERE id=$3;
                `,
                [true, date, id]
            );

            return { status: 204, response: "User deleted" };
        } catch (err) {
            return { status: 500, response: err };
        }
    },
};

module.exports = Users;
