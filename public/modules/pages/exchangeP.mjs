import { getData } from "../../app.mjs";

export const exchange = () => {
    return `
    <section class="exchanges-section">
        <div style='display:flex; padding:20px;'>
       <span onclick='renderPage.home()' style='cursor:pointer;'> &larr;
       </span>
        
        </div>   
        <div class="exchanges-wrapper">
            <div class="exchanges-title-container">
                <h2 id="exchanges-title">Histórico de trocas</h2>
            </div>
            <div id="exchanges-container" class="exchanges-container">
                <div class="btn-exchanges-container"></div>
                <p style="font-size: 20pt; text-align: center;">Você ainda não possui nenhuma solicitação de troca :(</p>                   
            </div>
        </div>
    </section> 
    `;
};

const exchangeList = (data) => {
    return `    
        <div id="trade-wrapper">
            <div class="trade-container">
                <div id="trade-products-container">
                    <div class="trade-product" id="offered-product" style="background-image: url(/files/${
                        data.productPhoto1
                    });">
                    </div>
                    <div id="arrow-exchanges">
                        <img src="./assets/imgs/right-arrow.png" alt="">
                        <img src="./assets/imgs/left-arrow.png" alt="">
                    </div>
                    <div class="trade-product" id="requested-product" style="background-image: url(/files/${
                        data.productPhoto2
                    });">
                    </div>
                </div>
                <div id="exchanges-options-btn">
                    ${data.res}
                </div>
                <div id="trade-users-container">
                    <div class="trade-user" id="offered-product-user">
                        <div class="user-trade-photo" id="offered-product-user-photo" style="background-image: url(/files/${
                            data.userPhoto1
                        });"></div>
                        <span>${data.userName1}</span>
                        <span>${data.userCity1}, ${data.userState1}</span>
                    </div>
                    <div id="arrow-exchanges-users">
                        <span>${
                            data.status == "finish"
                                ? data.userName2
                                : data.userName1
                        } solicitou uma troca</span>
                        <div id="arrow-users">
                            <img src="./assets/imgs/right-arrow.png" alt="" width="25px">
                            <img src="./assets/imgs/left-arrow.png" alt="" width="25px">
                        </div>
                    </div>
                    <div class="trade-user" id="requested-product-user">
                        <div class="user-trade-photo" id="requested-product-user-photo" style="background-image: url(/files/${
                            data.userPhoto2
                        });"></div>
                        <span>${data.userName2}</span>
                        <span>${data.userCity2}, ${data.userState2}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export const renderExchanges = async (status) => {
    document.querySelector(".menu-user-header").classList.remove("displayFlex");
    const main = document.querySelector("main");
    main.innerHTML = exchange();
    const divExchanges = document.querySelector("#exchanges-container");

    try {
        const options = {
            method: "GET",
            headers: {
                authorization: `${document.cookie}`,
            },
        };
        const response = await fetch("/exchanges", options);

        if (!response.ok) {
            window.renderPage.modalAlert(
                "Não foi possível consultar suas trocas!",
                "red"
            );
            return;
        }

        const data = await response.json();

        if (data.length < 1) return;

        divExchanges.innerHTML = `
            <div class="btn-exchanges-container">
                <button id="pending-exchanges-btn" onclick="renderPage.exchanges('pending')">Pendentes</button>
                <button id="finalized-exchanges-btn" onclick="renderPage.exchanges('finish')">Finalizados</button>
            </div>`;

        for (const trade of data) {
            const id = getData().dataUser.id;

            const dataExchanges = {
                userName1: trade.user1.user_name,
                userName2: trade.user2.user_name,
                userPhoto1: trade.user1.user_photo,
                userPhoto2: trade.user2.user_photo,
                productPhoto1: trade.user1.product_photo,
                productPhoto2: trade.user2.product_photo,
                userCity1: trade.user1.user_city,
                userCity2: trade.user2.user_city,
                userState1: trade.user1.user_state,
                userState2: trade.user2.user_state,
                res: `<button id="accept-btn" onclick="renderPage.responseExchanges(
                    '${trade.user2.products_id}', 
                    '${trade.user1.products_id}', 
                    'approved', 
                    '${trade.id}'
                    )">Aceitar</button>
                <button id="reject-btn" onclick="renderPage.responseExchanges(
                    '${trade.user2.products_id}', 
                    '${trade.user1.products_id}', 
                    'rejected', 
                    '${trade.id}'
                    )">Rejeitar</button>`,
            };

            if (status != "pending") {
                switch (trade.status) {
                    case "approved":
                        if (
                            trade.user2.users_id === id &&
                            trade.status === "approved"
                        ) {
                            dataExchanges.res = `
                            <p id="trade-status" style="background-color: #01760D; color: #ffffff">Solicitação aceita</p>
                            `;
                            dataExchanges.status = "finish";
                            const list = exchangeList(dataExchanges);
                            divExchanges.innerHTML += list;
                        }

                        if (
                            trade.user1.users_id === id &&
                            trade.status === "approved"
                        ) {
                            dataExchanges.res = `<p id="trade-status" style="background-color: #01760D; color: #ffffff">Solicitação aceita</p>`;
                            dataExchanges.status = "finish";
                            const list = exchangeList(dataExchanges);

                            divExchanges.innerHTML += list;
                        }
                        break;
                    case "rejected":
                        if (
                            trade.user2.users_id === id &&
                            trade.status === "rejected"
                        ) {
                            dataExchanges.res = `<p id="trade-status" style="background-color: red; color: #ffffff">Solicitação negada</p>`;
                            const list = exchangeList(dataExchanges);
                            divExchanges.innerHTML += list;
                        }

                        if (
                            trade.user1.users_id === id &&
                            trade.status === "rejected"
                        ) {
                            dataExchanges.res = `<p id="trade-status" style="background-color: red; color: #ffffff">Solicitação negada</p>`;

                            const list = exchangeList(dataExchanges);

                            divExchanges.innerHTML += list;
                        }
                        break;
                }
            }

            if (status === "pending") {
                if (trade.user2.users_id === id && trade.status === "pending") {
                    const list = exchangeList(dataExchanges);

                    divExchanges.innerHTML += list;
                }

                if (trade.user1.users_id === id && trade.status === "pending") {
                    dataExchanges.res = `<p id="trade-status">Solicitação pendente</p>`;

                    const list = exchangeList(dataExchanges);

                    divExchanges.innerHTML += list;
                }
            }
        }
    } catch (err) {
        window.renderPage.modalAlert(
            `Erro ao fazer requisição em exchanges => ${err}`,
            "red"
        );
        console.log("Erro ao fazer requisição em exchanges => ", err);
        return;
    }
};
