async function dataUser(token, userId) {

    const options = {
        method: 'GET',
        headers: {
            'x-access-token': `${token}`
        }
    };

    try {
        const response = await fetch(`http://localhost:8000/users/${userId}`, options);
        const dataUser = await response.json();
        return dataUser[0];
    } catch (err) {
        return { "status": 400, err };
    }
}

async function homeHeader(dataUser) {

    console.log(dataUser.name);
    console.log(dataUser.email);

    return `<div class="logo-container">
    <img src="./assets/imgs/logo.png" height="48px" width="48px" alt="logo">
    </div>
    <div class="searchbar-container">
    <input type="text" id="searchbar">
    <span class="material-symbols-outlined" id="search-btn">search</span>
    </div>
    <div class="profile-container">
    <img src="http://localhost:8000/assets/imgs/logo.png" height='36px ' width=' 36px' alt="">
    <div class="login-container">
        <span>${dataUser.name}</span>
        <span>${dataUser.email}</span>
    </div>
    </div>`;
}

function homeMain(dataUser) {

    return `<section class="title-card">
            <div class="title-container">
                <h2>Encontre as plantas que sua coleção precisa</h2>
            </div>
            </section>
            <section class="search-cards-section">
            <div class="search-cards-title">
                <h2>Busque por</h2>
            </div>
            <div class="search-cards-container">
                <div class="search-card"></div>
                <div class="search-card"></div>
                <div class="search-card"></div>
                <div class="search-card"></div>
                <img src="./assets/imgs/logo.png" alt="" width="30px" height="30px" id="cards-logo">
            </div>
            </section>
            <section class="collection-section">
            <h2>Sua coleção</h2>
            <div class="collection-cards-container">
                <div class="collection-card" id="create-card onclick="modalCreate()">
                    <img src="./assets/imgs/add.png" alt="" width="42px" height="64px">
                    <span>Adicionar à coleção</span>
                </div>
                <div class="modal">
                    <div class="modal-create-product">
                        <span class="close-btn">&times;</span>
                        <h2>Adicionar à coleção</h2>
                        <div class="create-product-inputs">
                            <div class="category-container">
                                <label for="category">Categoria do item:</label>
                                <select name="" id="">
                                    <option value="seed">Semente</option>
                                    <option value="plant">Planta</option>
                                </select>
                            </div>
                            <div class="pname-container">
                                <label for="product-name">Nome do item:</label>
                                <input type="text" id="product-name">
                            </div>
                            <div class="pdescription-container">
                                <label for="description">Descrição:</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button type="button" id="add-product-btn">Adicionar</button>
                        </div>
                        <div class="add-image-container">
                            <div id="add-image">

                            </div>
                            <button type="button" id="add-image-btn">Adicionar imagem</button>
                        </div>


                    </div>
                </div>

            </div>
            </section>
            `;
}

export { homeMain, homeHeader, dataUser };