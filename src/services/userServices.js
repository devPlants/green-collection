const validations = require("../validations/userValidations.js");
const users = require("../repositories/users.js");
const encrypt = require("./encrypt.js");
const authServices = require("./authServices.js");

const UserServices = {
    saveUser: async (data) => {
        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request",
            };
        }

        const { password } = data;
        const hash = encrypt(password);

        data.password = hash;

        const create = await users.create(data);

        const token = await authServices.createJwt({
            email: data.email,
            password: password,
        });

        create.token = token.response.token;

        return create;
    },
    getAllUsers: async () => {
        const getUsers = await users.getAllUsers();

        return getUsers;
    },
    getUserId: async (id) => {
        const getUser = await users.getUserById(id);

        return getUser;
    },
    updateUserId: async (data) => {
        console.log(data);
        const updateUser = await users.updateUser(data);

        return updateUser;
    },
    deleteUser: async (id) => {
        const deleteUser = await users.deleteUser(id);

        return deleteUser;
    },
};

module.exports = UserServices;
