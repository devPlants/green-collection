const userValidations = (data) => {
    const {
        name,
        photo,
        description,
        category
    } = data;
    if (
        typeof name != "string" ||
        /*  typeof photo != "string" || */
        typeof description != "string" ||
        typeof category != "string"
    ) {
        return false;
    }
    return true;
};

module.exports = userValidations;
