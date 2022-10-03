const Crypto = require("crypto");

module.exports = encrypt = (password) => {
    const salt =
        "54b593bc4e0ca55a71f367f7246beddbaac6ab06b3940f5562087beebd41d299";
    const crypt = Crypto.createHmac("sha256", salt);

    crypt.update(password);

    const hash = crypt.digest("hex");

    return hash;
};
