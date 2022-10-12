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

        const response = await fetch("/exchanges", options);
        if (!response.ok) {
            setTimeout(() => {
                window.renderPage.modalAlert(
                    "Erro ao enviar resposta de troca. Tente novamente e se persistir contate o administrador.",
                    "red"
                );
            }, 500);

            return window.renderPage.exchanges("pending");
        }

        setTimeout(() => {
            window.renderPage.modalAlert(
                "Resposta enviada com sucesso!",
                "green"
            );
        }, 500);

        return window.renderPage.exchanges("pending");
    } catch (err) {
        console.log("Erro ao atualizar exchanges => ", err);
    }
};
