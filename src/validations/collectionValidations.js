module.exports = collectionValidates = (data) => {
    if (
        data.status == "pending" ||
        data.status == "approved" ||
        data.status == "rejected" ||
        data.status == "in_exchange"
    ) {
        return true;
    }
    return false;
};
