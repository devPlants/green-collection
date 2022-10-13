export const tradeP = (data) => {
    const trade = `
    <div id="align-trade">
    <section class="trade-page-section">
<div class="trade-req-container">
    <div id="trade-req-img" style="background-image: url(/files/${data.productPhoto});"></div>
    <div id="trade-req-info">
        <p><span>Dono:</span> ${data.userName}</p>
        <p><span>${data.category}:</span> ${data.productName}</p>
        <p><span>Localização:</span> ${data.city} - ${data.state}</p>
        <p><span>Descrição:</span> ${data.description}</p>
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
</section>
</div>`;

    return trade;
};

export const tradeUserProducts = (data) => {
    return `
    <div class="offer-products-ondisplay" id="${data.id}" onclick="renderPage.selectProduct('${data.id}')" style="background-image: url(/files/${data.image});"></div>
    `;
};
