const validations = require("../validations/userValidations.js");
const users = require("../repositories/users.js");

const UserServices = {
    saveUser: async (data) => {
        if (!validations(data)) {
            return {
                status: 400,
                response: "Bad Request",
            };
        }
        const create = await users.create(data);

        return create;
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
