export const updateExchanges = async (productId1, productId2, status, id) => {
    try {
        const options = {
            method: "PUT",
            headers: {
                authorization: `${document.cookie}`,
                "Content-Type": "application/json",
            },
            body: `{"productId1":"${productId1}","productId2":"${productId2}","status":"${status}","id":"${id}"}`,
        };

        const response = await fetch(
            "http://localhost:8000/exchanges",
            options
        );
        const data = await response.json();
        pageExchanges("pending");
        return data;
    } catch (err) {
        console.log("Erro ao atualizar exchanges => ", err);
    }
};
