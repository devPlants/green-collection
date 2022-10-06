module.exports = files = {
    getFiles: (req, res) => {
        const fileName = req.params.file;
        const path = __dirname
        const filepath = path.replace("src\\storage", "uploads\\") + fileName
        console.log(path, filepath);
        // console.log(__dirname.replace("src/storage", "uploads/") + fileName);
        res.status(200).sendFile(
            __dirname.replace("src\\storage", "uploads\\") + fileName
        );
    },
};
