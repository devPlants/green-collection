import { searchS } from "../services/searchS.mjs";

export async function searchPlantsPageHTML(_page, _word) {
    const optionsSearch = {
        page: !parseInt(_page) ? 1 : parseInt(_page),
        search: !_word ? "a" : _word,
        category: "plant",
        by: "products",
    };

    const results = await searchS(optionsSearch);

    if (!results) {
        return `
        <section class="collection-section">
        <h3 style="margin-top: 60px">Nenhum resultado encontrado para essa pesquisa</h3>        
        </section>
        
        `;
    }

    let plants = "";

    const indices =
        Math.ceil(results.total / 8) < 1 ? 1 : Math.ceil(results.total / 8);

    for (let i = 1; i <= indices; i++) {
        plants += `<span style="font-weight: bold; cursor: pointer;" onclick="renderPage.searchPlantsPage('${i}', '${optionsSearch.search}')"> ${i}  </span>`;
    }

    const searchPlants = `
    <section class="search-title-card search-page-card">
        <div class="search-title-container">
            <h2>Plantas</h2>
            <p>Digite o nome da planta que deseja no campo de busca para filtra-la por nome.</p>
        </div>
    </section> 
    <section class="collection-section">
        <h2 style="margin-top: 25px">Resultado da buscar por plantas</h2>
        <div class="collection-cards-container">
        ${results.cards}         
        </div>
        <div style="text-align: center; margin-bottom: 30px; margin-top: -20px"">
                ${plants}
        </div>        
    </section>
    <style>
        .search-page-card::after{
            background-image: url(./assets/imgs/background-search-location.png)
        }
     </style>
`;

    return searchPlants;
}

export async function searchSeedsPageHTML(_page, _word) {
    const optionsSearch = {
        page: !parseInt(_page) ? 1 : parseInt(_page),
        search: !_word ? "a" : _word,
        category: "seed",
        by: "products",
    };

    const results = await searchS(optionsSearch);

    if (!results) {
        return `
        <section class="collection-section">
        <h3 style="margin-top: 60px">Nenhum resultado encontrado para essa pesquisa</h3>        
        </section>
        
        `;
    }

    let plants = "";
    const indices =
        Math.ceil(results.total / 8) < 1 ? 1 : Math.ceil(results.total / 8);

    for (let i = 1; i <= indices; i++) {
        plants += `<span style="font-weight: bold; cursor: pointer;" onclick="renderPage.searchSeedsPage('${i}', '${optionsSearch.search}')"> ${i}  </span>`;
    }
    const searchSeeds = `
                <section class="search-title-card search-page-card">
                    <div class="search-title-container">
                        <h2>Sementes</h2>
                        <p>Digite o nome da semente que deseja no campo de busca para filtra-la por nome.</p>
                    </div>
                </section>

                <section class="collection-section">
                    <h2 style="margin-top: 25px">Resultado da buscar por sementes</h2>
                    <div class="collection-cards-container">
                        ${results.cards}         
                    </div>
                    <div style="text-align: center; margin-bottom: 30px; margin-top: -20px"">
                        ${plants}
                    </div>
                    
                </section>
                <style>
                .search-page-card::after{
                    background-image: url(./assets/imgs/background-search-seeds.png);                    
                }

            </style>        
            `;

    return searchSeeds;
}

export async function searchUsersPageHTML(_page, _word) {
    const optionsSearch = {
        page: !parseInt(_page) ? 1 : parseInt(_page),
        search: !_word ? "a" : _word,
        category: "",
        by: "users",
    };

    const results = await searchS(optionsSearch);

    if (!results) {
        return `
        <section class="collection-section">
        <h3 style="margin-top: 60px">Nenhum resultado encontrado para essa pesquisa</h3>        
        </section>
        
        `;
    }

    let plants = "";
    const indices =
        Math.ceil(results.total / 8) < 1 ? 1 : Math.ceil(results.total / 8);

    for (let i = 1; i <= indices; i++) {
        plants += `<span style="font-weight: bold; cursor: pointer;" onclick="renderPage.searchUsersPage('${i}', '${optionsSearch.search}')"> ${i}  </span>`;
    }

    const searchUsers = `
                <section class="search-title-card search-page-card">
                    <div class="search-title-container">
                        <h2>Usuários</h2>
                        <p>Digite o nome do usuário que deseja no campo de busca para filtra-la por nome.</p>
                    </div>
                </section>

                <section class="collection-section">
                    <h2 style="margin-top: 25px">Resultado da buscar por usuarios</h2>
                    <div class="collection-cards-container">
                        ${results.cards}         
                    </div>
                    <div style="text-align: center; margin-bottom: 30px; margin-top: -20px"">
                        ${plants}
                    </div>
                    
                </section>

            <style>
                .search-page-card::after{
                    background-image: url(./assets/imgs/background-search-users.png)
                }
            </style>`;
    return searchUsers;
}

export async function searchLocationPageHTML(_page, _word) {
    const optionsSearch = {
        page: !parseInt(_page) ? 1 : parseInt(_page),
        search: !_word ? "a" : _word,
        category: "",
        by: "local",
    };

    const results = await searchS(optionsSearch);

    if (!results) {
        return `
        <section class="collection-section">
        <h3 style="margin-top: 60px">Nenhum resultado encontrado para essa pesquisa</h3>        
        </section>
        
        `;
    }

    let plants = "";
    const indices =
        Math.ceil(results.total / 8) < 1 ? 1 : Math.ceil(results.total / 8);

    for (let i = 1; i <= indices; i++) {
        plants += `<span style="font-weight: bold; cursor: pointer;" onclick="renderPage.searchLocationPage('${i}', '${optionsSearch.search}')"> ${i} </span>`;
    }

    const searchLocal = `
                <section class="search-title-card search-page-card">
                    <div class="search-title-container">
                        <h2>Localização</h2>
                        <p>Digite o nome da localização que deseja no campo de busca para filtra-la por nome.</p>
                    </div>
                </section>

                <section class="collection-section">
                    <h2 style="margin-top: 25px">Resultado da buscar por localidade</h2>
                    <div class="collection-cards-container">
                        ${results.cards}         
                    </div>
                    <div style="text-align: center; margin-bottom: 30px; margin-top: -20px"">
                        ${plants}
                    </div>
                    
                </section>

            <style>
                .search-page-card::after{
                    background-image: url(./assets/imgs/background-search-plants.png)
                }

            </style>`;
    return searchLocal;
}
