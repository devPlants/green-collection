import { homeMainHTML } from "../pages/homeP.mjs";

export async function homeMainS(_token) {

    const options = {
        method: "GET",
        headers: {
            authorization: `${_token}`,
        },
    };

    let cardsCollection = "";

    try {
        const response = await fetch("/collections/?rows=7&page=1", options);
        const data = await response.json();
        data.forEach((card) => {
            cardsCollection += `<div class="collection-card product-card">
                                    <div class="img-procuct-card" style='background-image: url("http://localhost:8000/files/${card.product_photo}");'></div>
                                    <span><strong>${card.product_name}</strong> <br> ${card.users_city}, ${card.user_state}</span>
                                </div>`;
        });
    } catch (err) {
        window.renderPage.modalAlert(`Ocorreu um erro ao carregar sua coleção, recarregue a página ou contacte o administrador! Erro: ${err}`, 'red')
        return 400;
    }

    return homeMainHTML(cardsCollection);
}
