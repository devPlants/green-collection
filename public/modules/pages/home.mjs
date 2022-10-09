async function dataUser(token, userId) {
    const options = {
        method: "GET",
        headers: {
            authorization: `${token}`,
        },
    };

    try {
        const response = await fetch(
            `http://localhost:8000/users/${userId}`,
            options
        );
        const dataUser = await response.json();
        return dataUser[0];
    } catch (err) {
        return { status: 400, err };
    }
}

async function homeHeader(dataUser) {
    const nameFull = dataUser.name.split(" ");
    const name1 = nameFull[0];
    const name2 = nameFull[1];
    const nameEnd = name2 == undefined ? name1 : `${name1} ${name2}`;

    return `<div class="logo-container">
                <img src="./assets/imgs/logo.png" height="48px" width="48px" alt="logo">
            </div>

            <div class="searchbar-container">
                <input type="text" id="searchbar">
                <span class="material-symbols-outlined" id="search-btn">search</span>
            </div>

            <div id="div-login">
            <div class="profile-container" onclick="activeDropdown()">

                <div style='width: 36px; height: 36px; background-size: cover; background-image: url("http://localhost:8000/files/${dataUser.photo}"); border-radius: 50%;'></div>

                <div class="login-container">
                    <span>${nameEnd}</span>
                    <span>${dataUser.email}</span>
                </div>

            </div>

            <div class="menu-user-header">
                <nav>
                    <ul>
                        <li onclick = "pageExchanges('pending')">Notificações</li>
                        <li onclick = 'pageUpdate()'>Editar perfil</li>
                        <li onclick= 'loginPage()'>Sair</li>
                    </ul>
                </nav>
            </div>
        </div>`;
}

async function homeMain(dataUser, token) {
    const options = {
        method: "GET",
        headers: {
            authorization: `${token}`,
        },
    };

    let cardsCollection = "";

    try {
        const response = await fetch(
            "http://localhost:8000/collections/?rows=7&page=1",
            options
        );
        const data = await response.json();

        data.forEach((card) => {
            cardsCollection += `<div class="collection-card product-card">
                                    <div class="img-procuct-card" style='background-image: url("http://localhost:8000/files/${card.product_photo}");'></div>
                                    <span><strong>${card.product_name}</strong> <br> ${card.users_city}, ${card.user_state}</span>
                                </div>`;
        });
    } catch (err) {
        console.log(`Ocorreu um erro na requicição à coleção: ${err}`);
        return 400;
    }

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
                    <div class="search-card" id="search-plants-card"></div>
                    <div class="search-card" id="search-seeds-card"></div>
                    <div class="search-card" id="search-users-card"></div>
                    <div class="search-card" id="search-locations-card"></div>
                    <img src="./assets/imgs/logo.png" alt="" width="30px" height="30px" id="cards-logo">
                </div>
            </section>

            <section class="collection-section">
                <h2>Sua coleção</h2>
                <div class="collection-cards-container">

                    <div class="collection-card" id="create-card" onclick="modalCreate()">
                        <img src="./assets/imgs/add.png" alt="" width="42px" height="64px">
                        <span>Adicionar à coleção</span>
                    </div>              

                    ${cardsCollection}

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
                                    <button type="button" id="add-product-btn" onclick="addToCollection()">Adicionar</button>
                                </div>

                                <div class="add-image-container">
                                    <div id="add-image"></div>
                                    <label for="add-image-btn" class="label-for-photo-btn">Adicionar Imagem</label>
                                    <input type="file" id="add-image-btn" name="photo">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            `;
}

export { homeMain, homeHeader, dataUser };
