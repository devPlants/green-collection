const userValidations = (data) => {
    const {
        name,
        photo,
        email,
        password,
        cpf,
        phoneNumber,
        zipCode,
        address,
        number,
        city,
        state,
    } = data;
    if (
        typeof name != "string" ||
        /*  typeof photo != "string" || */
        typeof email != "string" ||
        typeof password != "string" ||
        typeof address != "string" ||
        typeof city != "string" ||
        typeof state != "string" ||
        typeof cpf != "string" ||
        typeof phoneNumber != "string" ||
        typeof zipCode != "string" ||
        typeof number != "string"
    ) {
        return false;
    }
    return true;
};

module.exports = userValidations;
