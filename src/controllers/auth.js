const jwt = require("jsonwebtoken");
const authServices = require("../services/authServices.js");

module.exports = auth = {
    verifyAuth: (req, res, next) => {
        const token = req.headers.authorization;

        jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
            if (err) return res.status(401).end();

            req.userId = decoded.userId;
            req.userAdmin = decoded.userAdmin;
            req.userName = decoded.userName;
            req.userPhoto = decoded.userPhoto;
            req.userEmail = decoded.userEmail;

            next();
        });
    },
    authAdmin: async (req, res, next) => {
        const isAdmin = req.userAdmin;
        const admin = await authServices.verifyAdmin(isAdmin);

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

        res.cookie("token", user.response.token, {
            maxAge: 900000,
            httpOnly: true,
        });

        res.status(200).json({
            userId: user.response.userId,
            token: user.response.token,
        });
    },
};
