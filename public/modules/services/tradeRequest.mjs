let productId = "";

export const selectProduct = (id) => {
    if (productId) {
        const cardProduct = document.getElementById(`${productId}`);
        cardProduct.style.transform = "none";
        cardProduct.style.boxShadow = "none";
    }

    const cardProduct = document.getElementById(`${id}`);
    cardProduct.style.border = "none";
    cardProduct.style.transform = "scale(1.15)";
    cardProduct.style.boxShadow = "3px 2px 22px 1px rgba(0, 0, 0, 0.25)";

    productId = id;

    return true;
};

export const askTrade = async (product) => {
    if (!productId) return alert("Selecione um produto");

    try {
        const options = {
            method: "POST",
            headers: {
                authorization: `${document.cookie}`,
                "Content-Type": "application/json",
            },
            body: `{"productId1":"${productId}","productId2":"${product}"}`,
        };

        const response = await fetch(
            "/exchanges",
            options
        );

        if (!response.ok) {
            setTimeout(() => {
                window.renderPage.modalAlert(
                    "Erro ao acesser detalhes do produto",
                    "red"
                );
            }, 500);

            return window.renderPages.home();
        }

        setTimeout(() => {
            window.renderPage.modalAlert(
                "Solicitação de troca realizada com sucesso!",
                "green"
            );
        }, 500);

        window.renderPage.home();

        return true;
    } catch (err) {
        console.log("Erro ao criar exchanges => ", err);
    }
};
