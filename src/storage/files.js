module.exports = files = {
    getFiles: (req, res) => {
        const fileName = req.params.file;
        res.status(200).sendFile(
            __dirname.replace("src/storage", "uploads/") + fileName
        );
    },
};
