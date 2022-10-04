const userValidations = (data) => {
    const {
        name,
        photo,
        description,
        category,
        user_id
    } = data;
    if (
        typeof name != "string" ||
        /*  typeof photo != "string" || */
        typeof description != "string" ||
        typeof user_id != "string" ||
        typeof category != "string"
    ) {
        return false;
    }
    return true;
};

module.exports = userValidations;
