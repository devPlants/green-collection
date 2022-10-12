export const updateExchanges = async (productId1, productId2, status, id) => {
    console.log(
        `{"productId1":"${productId1}","productId2":"${productId2}","status":"${status}","id":"${id}"}`
    );
    try {
        const options = {
            method: "PUT",
            headers: {
                authorization: `${document.cookie}`,
                "Content-Type": "application/json",
            },
            body: `{"productId1":"${productId1}","productId2":"${productId2}","status":"${status}","id":"${id}"}`,
        };

        const response = await fetch("/exchanges", options);
        const data = await response.json();

        setTimeout(() => {
            window.renderPage.modalAlert(
                "Resposta realizada com sucesso!",
                "green"
            );
        }, 500);

        window.renderPage.exchanges("pending");
        return data;
    } catch (err) {
        console.log("Erro ao atualizar exchanges => ", err);
    }
};
