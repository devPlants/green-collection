export const adminP = (page) => {
    return `<section class="approval-section">
    <div class="approval-wrapper">
        <div class="approval-title-container">
            <h2 id="approval-title">Aprovações de produtos</h2>
        </div>
        <div class="approval-container">
            <div class="btn-approval-container">                
            </div>
            <div id="toApprove-wrapper">
                ${page}
            </div>
        </div>
</section>`;
};

export const approvalList = (data) => {
    return `
    <div class="toApprove-container">
        <div class="toApprove-product-owner">
            <div class="product-owner-photo" style="background-image: url(/files/${data.userPhoto});"></div>
                <span>${data.userName}</span>
                <span>${data.userCity}, ${data.userState}</span>
            </div>
            <div class="arrow-toApprove">
                <span>Usuário adicionou um produto</span>
                <img src="./assets/imgs/right-arrow.png" alt="">
            </div>
            <div class="toApprove-product" style="background-image: url(/files/${data.productPhoto});">
            </div>
            <div class="product-info">
                <input type="text" id="name-product" name="product" style="padding-left: 10px;" value="${data.productName}" disabled>
                <textarea id="description-produt" name="description" rows="5" cols="20" style="padding-left: 10px; padding-top: 10px" disabled>${data.description}</textarea>
                
            </div>
            <div id="approval-options-btn">
                <button id="accept-btn" onclick="renderPage.approvalAdmin('${data.userId}', '${data.productId}', 'approved')">Aceitar</button>
                <button id="reject-btn" onclick="renderPage.approvalAdmin('${data.userId}', '${data.productId}', 'rejected')">Rejeitar</button>
            </div>                    
    </div>
    `;
};
