export default exchange = () => {
    const bodyExchange = `
    <section class="exchanges-section">
            <div class="exchanges-wrapper">
                <div class="exchanges-title-container">
                    <h2 id="exchanges-title">Histório de trocas</h2>
                </div>
                <div class="exchanges-container">
                    <div class="btn-exchanges-container">
                        <button id="pending-exchanges-btn">Pendentes</button>
                        <button id="finalized-exchanges-btn">Finalizados</button>
                    </div>
                    <div id="trade-wrapper">
                        <div class="trade-container">
                            <div id="trade-products-container">
                                <div class="trade-product" id="offered-product">
                                </div>
                                <div id="arrow-exchanges">
                                    <img src="./assets/imgs/right-arrow.png" alt="">
                                    <img src="./assets/imgs/left-arrow.png" alt="">
                                </div>
                                <div class="trade-product" id="requested-product">
                                </div>
                            </div>
                            <div id="exchanges-options-btn">
                                <button id="accept-btn">Aceitar</button>
                                <button id="reject-btn">Rejeitar</button>
                            </div>
                            <div id="trade-users-container">
                                <div class="trade-user" id="offered-product-user">
                                    <div class="user-trade-photo" id="offered-product-user-photo"></div>
                                    <span>User Name</span>
                                    <span>São Paulo, SP</span>
                                </div>
                                <div id="arrow-exchanges-users">
                                    <span>User Name solicitou uma troca</span>
                                    <div id="arrow-users">
                                        <img src="./assets/imgs/right-arrow.png" alt="" width="25px">
                                        <img src="./assets/imgs/left-arrow.png" alt="" width="25px">
                                    </div>
                                </div>
                                <div class="trade-user" id="requested-product-user">
                                    <div class="user-trade-photo" id="requested-product-user-photo"></div>
                                    <span>User Name</span>
                                    <span>São Paulo, SP</span>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </section>
    `;
};
