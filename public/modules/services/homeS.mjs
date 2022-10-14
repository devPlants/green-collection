import { homeMainHTML } from "../pages/homeP.mjs";

export async function homeMainS() {
    return homeMainHTML(await homePaginate(1));
}

async function homePaginate(_page) {
    const options = {
        method: "GET",
        headers: {
            authorization: `${document.cookie}`,
        },
    };

    let cardsCollection = "";
    let pagination = "";

    try {
        const response = await fetch(
            `/collections/?rows=7&page=${_page}`,
            options
        );

        if (!response.ok) {
            setTimeout(() => {
                window.renderPage.login();
            }, 500);
            return;
        }

        const data = await response.json();
        const indices =
            Math.ceil(data[0].total / 7) < 1 ? 1 : Math.ceil(data[0].total / 7);

        const divPaginate = '<div class="detail-paginate">//</div>';

        for (let i = 1; i <= indices; i++) {
            pagination += `<span style="font-weight: bold; cursor: pointer; text-align: center;" onclick="renderPage.renderHomePaginate('${i}')">  ${i}  </span>`;
        }

        const paginate = divPaginate.replace("//", pagination);

        data.forEach((card) => {
            cardsCollection += `<div class="collection-card product-card">
                                    <div class="img-procuct-card" style='background-image: url("/files/${card.product_photo}");'></div>
                                    <span><strong>${card.product_name}</strong> <br> ${card.users_city}, ${card.user_state}</span>
                                </div>`;
        });

        if (data[0].total > 7) cardsCollection += paginate;

        return cardsCollection;
    } catch (err) {
        window.renderPage.modalAlert(
            `Ocorreu um erro ao carregar sua coleção, recarregue a página ou contacte o administrador! Erro: ${err}`,
            "red"
        );
        return "";
    }
}

export async function renderHomePaginate(_page) {
    const divCards = document.querySelector("#cards-home-paginate");

    divCards.innerHTML = "";
    divCards.innerHTML = `
    <div class="collection-card" id="create-card" onclick="renderPage.modalCreate()">
        <img src="./assets/imgs/add.png" alt="" width="42px" height="64px">
        <span>Adicionar à coleção</span>
    </div>           

    ${await homePaginate(_page)}

    <div class="modal">

        <div class="modal-create-product">
            <span class="close-btn">&times;</span>
            <h2>Adicionar à coleção</h2>

            <form id="modal-form" enctype="multipart/form-data">

                <div class="create-product-inputs">

                    <div class="category-container">
                        <label for="category">Categoria do item:</label>
                        <select name="category" id="">
                            <option value="seed">Semente</option>
                            <option value="plant">Planta</option>
                        </select>
                    </div>

                    <div class="pname-container">
                        <label for="product-name">Nome do item:</label>
                        <input type="text" id="product-name" name="name">
                    </div>

                    <div class="pdescription-container">
                        <label for="description">Descrição:</label>
                        <textarea name="description" id="product-description" cols="30" rows="10"></textarea>
                    </div>
                    <button type="button" id="add-product-btn" onclick="renderPage.addToCollection()">Adicionar</button>
                </div>

                <div class="add-image-container">
                    <div id="add-image"></div>
                    <label for="add-image-btn" class="label-for-photo-btn">Adicionar Imagem</label>
                    <input type="file" id="add-image-btn" name="photo">
                </div>
            </form>
        </div>
    </div>`;

    return true;
}
