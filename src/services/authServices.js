const jwt = require("jsonwebtoken");
const Users = require("../repositories/users");
const encrypt = require("./encrypt");

module.exports = authService = {
    createJwt: async (data) => {
        const { email, password } = data;
        const passwordHash = encrypt(password.toString());
        const user = await Users.getUserByEmail(email);

        if (user.status != 200) {
            return { status: user.status, response: user.response };
        }

        if (passwordHash != user.response[0].password) {
            return { status: 400, response: "Password invalid!" };
        }

        const _token = jwt.sign(
            { userId: user.response[0].id },
            process.env.JWTSECRET,
            { expiresIn: 3000 }
        );

        return {
            status: 200,
            response: { id: user.response[0].id, token: _token },
        };
    },
    verifyAdmin: async (id) => {
        const user = await Users.getUserById(id);

        if (user.status != 200) {
            return { status: user.status, response: user.response };
        }

        if (!user.response[0].admin) {
            return { status: 401, response: "User is not admin" };
        }

        return { status: 200 };
    },
};
