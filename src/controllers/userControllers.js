const UserServices = require("../services/userServices.js");

const UserControllers = {
    create: async (req, res) => {
        const data = req.body;
        
        if (req.file) {
            data.photo = req.file.filename;
        } else { data.photo = 'userNull.png' }

        const createUser = await UserServices.saveUser(data);

        if (createUser.status > 300) {
            return res.status(createUser.status).json({
                message: createUser.response,
            });
        }

        res.cookie("token", createUser.token, {
            maxAge: 900000,
            httpOnly: true,
        });

        res.status(201).json({
            id: createUser.response,
            token: createUser.token,
        });
    },
    getAll: async (req, res) => {
        const users = await UserServices.getAllUsers();

        if (users.status > 300) {
            return res.status(users.status).json({
                message: users.response,
            });
        }

        res.status(200).json(users.response);
    },
    get: async (req, res) => {
        const id = req.params.id;
        const user = await UserServices.getUserId(id);

        if (user.status > 300) {
            return res.status(user.status).json({
                message: user.response,
            });
        }

        res.status(200).json(user.response);
    },
    update: async (req, res) => {
        const id = req.userId;
        const data = req.body;

        if (req.file != undefined) { data.photo = req.file.filename }

        data.updated_at = new Date();
        data.id = id;

        const update = await UserServices.updateUserId(data);

        if (update.status > 300) {
            return res.status(update.status).json({
                message: update.response,
            });
        }

        res.status(204).send();
    },
    delete: async (req, res) => {
        const id = req.userId;
        const del = await UserServices.deleteUser(id);

        if (del.status > 300) {
            return res.status(del.status).json({
                message: del.response,
            });
        }

        res.status(204).send();
    },
};

module.exports = UserControllers;
