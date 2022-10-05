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
            {
                userId: user.response[0].id,
                userEmail: user.response[0].email,
                userName: user.response[0].name,
                userPhoto: user.response[0].photo,
                userAdmin: user.response[0].admin,
            },
            process.env.JWTSECRET,
            { expiresIn: 3000 }
        );

        return {
            status: 200,
            response: { token: _token },
        };
    },
    verifyAdmin: async (admin) => {
        if (!admin) {
            return { status: 401, response: "User is not admin" };
        }

        return { status: 200 };
    },
};
