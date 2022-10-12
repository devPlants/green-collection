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
                userCep: user.response[0].zip_code,
                userAddress: user.response[0].address,
                userNumber: user.response[0].number,
                userCity: user.response[0].city,
                userState: user.response[0].state,
                userCpf: user.response[0].cpf,
                userPhoneNumber: user.response[0].phone_number,
            },
            process.env.JWTSECRET,
            { expiresIn: 9999 }
        );

        return {
            status: 200,
            response: { token: _token, userId: user.response[0].id },
        };
    },
    verifyAdmin: async (admin) => {
        if (!admin) {
            return { status: 401, response: "User is not admin" };
        }

        return { status: 200 };
    },
};
