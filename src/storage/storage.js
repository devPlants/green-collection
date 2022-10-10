const multer = require("multer");
const Crypto = require("crypto");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const fileExtension = file.originalname.split(".")[1];
        const newFileName =
            Crypto.randomBytes(16).toString("hex") + "-" + new Date().getTime();

        cb(null, `${newFileName}.${fileExtension}`);
    },
});

const upload = multer({ storage });

module.exports = upload;
