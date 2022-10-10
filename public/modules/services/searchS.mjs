import { cards } from "../cards.mjs";

export const searchS = async (data) => {
    let url = "";

    if (data.by) {
        url = `&by=${data.by}`;
    }

    if (data.category) {
        url = `&by=${data.by}&category=${data.category}`;
    }

    if (data.search) {
        url += `&search=${data.search}`;
    }

    try {
        const options = {
            method: "GET",
            headers: {
                authorization: `${document.cookie}`,
            },
        };
        const search = await fetch(
            `http://localhost:8000/search/?rows=8&page=${data.page}${url}`,
            options
        );
        const response = await search.json();
        let pageSearch = "";
        for (const card of response) {
            pageSearch += cards({
                image: card.product_photo,
                name: card.product_name,
                city: card.user_city,
                state: card.user_state,
            });
        }

        return { cards: pageSearch, total: response[0].total };
    } catch (err) {
        console.log("Erro na requisição do searchS: ", err);
    }
};
