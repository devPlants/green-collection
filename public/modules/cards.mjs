export const cards = (data) => {
    return `
        <div class="collection-card product-card" onclick="renderPage.trade('${data.productId}')">
            <div class="img-procuct-card" style="background-image: url(/files/${data.image});"></div>
            <span><strong>${data.name}</strong> <br> ${data.userName} <br> ${data.city} - ${data.state}</span>
        </div>
        `;
};
