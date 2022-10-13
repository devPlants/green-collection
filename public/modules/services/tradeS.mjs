import { tradeP, tradeUserProducts } from "../pages/tradeP.mjs";

export const tradeS = async (productId) => {
    let renderProds = "";
    try {
        const options = {
            method: "GET",
            headers: {
                authorization: `${document.cookie}`,
            },
        };

        const productDetail = await fetch(
            `/products/${productId}`,
            options
        );

        if (!productDetail.ok) {
            setTimeout(() => {
                window.renderPage.modalAlert(
                    "Erro ao acesser detalhes do produto",
                    "red"
                );
            }, 500);
            return window.renderPages.home();
        }

        const product = await productDetail.json();

        const pageTrade = tradeP({
            productId: product[0].products_id,
            userName: product[0].user_name,
            productName: product[0].product_name,
            productPhoto: product[0].product_photo,
            city: product[0].user_city,
            state: product[0].user_state,
            description: product[0].description,
            userProduct: await tradeList(1),
            category: product[0].category == "plant" ? "Planta" : "Semente",
        });

        return pageTrade;
    } catch (err) {
        console.log("Erro na requisição de tradeS: ", err);
    }
};

const tradeList = async (_page) => {
    let renderProds = "";
    let pagination = "";

    try {
        const options = {
            method: "GET",
            headers: {
                authorization: `${document.cookie}`,
            },
        };

        const getUserProducts = await fetch(
            `/collections/?rows=9&page=${_page}&status=approved`,
            options
        );

        if (!getUserProducts.ok) {
            setTimeout(() => {
                window.renderPage.modalAlert(
                    "Erro ao acesser detalhes do produto",
                    "red"
                );
            }, 500);
            return window.renderPages.home();
        }

        const userProducts = await getUserProducts.json();

        if (!userProducts.length) {
            return "<p>Voce ainda não possui produtos aprovados</p>";
        }

        const indices =
            Math.ceil(userProducts[0].total / 9) < 1
                ? 1
                : Math.ceil(userProducts[0].total / 9);
        const divPaginate = '<div class="detail-paginate">//</div>';

        for (let i = 1; i <= indices; i++) {
            pagination += `<span style="font-weight: bold; cursor: pointer; text-align: center;" onclick="renderPage.tradePagination('${i}')">  ${i}  </span>`;
        }

        const paginate = divPaginate.replace("//", pagination);

        for (const prod of userProducts) {
            renderProds += tradeUserProducts({
                image: prod.product_photo,
                id: prod.products_id,
            });
        }

        if (userProducts[0].total > 9) renderProds += paginate;

        return renderProds;
    } catch (err) {
        return console.log(err);
    }
};

export const tradePagination = async (page) => {
    const divPaginate = document.querySelector("#products-users-paginate");

    divPaginate.innerHTML = await tradeList(page);
    return;
};
