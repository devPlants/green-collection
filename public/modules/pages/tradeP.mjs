export const tradeP = (data) => {
    const trade = `
    <section class="trade-page-section">
<div class="trade-req-container">
    <div id="trade-req-img" style="background-image: url(http://localhost:8000/files/${data.productPhoto});"></div>
    <div id="trade-req-info">
        <p>Dono: ${data.userName}</p>
        <p>${data.category}: ${data.productName}</p>
        <p>Localização: ${data.city} - ${data.state}</p>
        <div class="req-description-container">
            <h4>Descrição:</h3>
            <p>${data.description}</p>
        </div>
    </div>
</div>
<div class="trade-input-container">
    <span>Trocar por</span>
    <div class="trade-arrows">
        <img src="./assets/imgs/trade-arrows.png" width="60%" alt="">
    </div>
    <button type="button" id="trade-btn" style="cursor: pointer;" onclick="renderPage.askTrade('${data.productId}')" >Solicitar troca</button>
</div>
<div class="trade-offer-container">
    <div class="trade-offer-title">
        <span>Minha coleção</span>
    </div>
    <div id="products-users-paginate" class="offer-products-container">
        ${data.userProduct}
    </div>
    <span>Selecione um item para solicitar a troca!</span>
    <div class="offer-selected-products-container">
        
    </div>
</div>
</section>`;

    return trade;
};

export const tradeUserProducts = (data) => {
    return `
    <div class="offer-products-ondisplay" id="${data.id}" onclick="renderPage.selectProduct('${data.id}')" style="background-image: url(http://localhost:8000/files/${data.image});"></div>
    `;
};
