const validations = require("../validations/userValidations.js");
const users = require("../repositories/users.js");
const encrypt = require("./encrypt.js");

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
        const updateUser = await users.updateUser(data);

        return updateUser;
    },
    deleteUser: async (id) => {
        const deleteUser = await users.deleteUser(id);

        return deleteUser;
    },
};

module.exports = UserServices;
