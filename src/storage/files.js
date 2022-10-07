module.exports = files = {
    getFiles: (req, res) => {
        const fileName = req.params.file;
        try {
            res.status(200).sendFile(
                __dirname.replace("src/storage", "uploads/") + fileName
            );
        } catch (err) {
            return res.status(404).end();
        }
    },
};
