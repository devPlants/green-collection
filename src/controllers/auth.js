const jwt = require("jsonwebtoken");
const authServices = require("../services/authServices.js");

module.exports = auth = {
    verifyAuth: (req, res, next) => {
        const token = req.headers["x-access-token"];
        jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
            if (err) return res.status(401).end();

            req.userId = decoded.userId;

            next();
        });
    },
    authAdmin: async (req, res, next) => {
        const admin = await authServices.verifyAdmin(req.userId);

        if (admin.status != 200) {
            return res.status(admin.status).json(admin.response);
        }

        next();
    },
    login: async (req, res) => {
        const user = await authServices.createJwt(req.body);

        if (user.status != 200) {
            return res.status(user.status).json({ message: user.response });
        }

        res.status(200).json({
            userId: user.response.id,
            token: user.response.token,
        });
    },
};
