module.exports = exchangeValidations = (data) => {
    const { userId1, productId1, userId2, productId2 } = data;
    if (
        typeof userId1 != "string" ||
        typeof productId1 != "string" ||
        typeof userId2 != "string" ||
        typeof productId2 != "string"
    ) {
        return false;
    }
    return true;
};
