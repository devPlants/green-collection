
export function tradeMain() {

    return `<section class="trade-page-section">
<div class="trade-req-container">
    <div id="trade-req-img"></div>
    <div id="trade-req-info">
        <p>Dono: ${productOwner}</p>
        <p>${productCategory}: ${productName}</p>
        <p>Localização: ${localization}</p>
        <div class="req-description-container">
            <h4>Descrição:</h3>
                <p>${productDescription}</p>
        </div>
    </div>
</div>
<div class="trade-input-container">
    <span>Trocar por</span>
    <div class="trade-arrows">
        <img src="./assets/imgs/trade-arrows.png" width="60%" alt="">
    </div>
    <button type="button" id="trade-btn">Solicitar troca</button>
</div>
<div class="trade-offer-container">
    <div class="trade-offer-title">
        <span>Minha coleção</span>
    </div>
    <div class="offer-products-container">
        <div class="offer-products-ondisplay" data-status="unselected"></div>
        <div class="offer-products-ondisplay" data-status="unselected"></div>
        <div class="offer-products-ondisplay" data-status="unselected"></div>
        <div class="offer-products-ondisplay" data-status="unselected"></div>
        <div class="offer-products-ondisplay" data-status="unselected"></div>
        <div class="offer-products-ondisplay" data-status="unselected"></div>
        <div class="offer-products-ondisplay" data-status="unselected"></div>
        <div class="offer-products-ondisplay" data-status="unselected"></div>
        <div class="offer-products-ondisplay" data-status="unselected"></div>
    </div>
    <span>Selecione um item para solicitar a troca!</span>
    <div class="offer-selected-products-container">
        
    </div>
</div>
</section>`
}
