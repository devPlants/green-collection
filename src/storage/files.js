module.exports = files = {
    getFiles: (req, res) => {
        const fileName = req.params.file;
        // console.log(__dirname.replace("src\\storage", "uploads\\") + fileName);
        res.status(200).sendFile(
            __dirname.replace("src\\storage", "uploads\\") + fileName
        );
    },
};
