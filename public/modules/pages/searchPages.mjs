import { searchS } from "../services/searchS.mjs";

async function searchPlantsPage(_page, _word) {
    const optionsSearch = {
        page: !_page ? 1 : _page,
        search: !_word ? "" : _word,
        category: "plant",
        by: "products",
    };

    const results = await searchS(optionsSearch);

    let plants = "";
    const indices =
        parseInt(results.total / 8) < 1 ? 1 : parseInt(results.total / 8);

    for (let i = 1; i <= indices; i++) {
        plants += `<span style="font-weight: bold; text-decoration: underline; cursor: pointer;" onclick="plantsSearchMain(${i})">${i}</span>`;
    }

    const searchPlants = `
    <section class="search-title-card search-page-card">
        <div class="search-title-container">
            <h2>Plantas</h2>
            <p>Digite o nome da planta que deseja no campo de busca para filtra-la por nome.</p>
        </div>
    </section> 
    <section class="collection-section">
        <h2>Resultado da buscar por plantas</h2>
        <div class="collection-cards-container">
        ${results.cards}         
        </div>
        <div style="text-align: center; margin-bottom: 15px">
                ${plants}
        </div>
        
    </section>
`;

    return searchPlants;
}

function searchSeedsPage() {
    return `<main>
    <section class="search-title-card search-page-card">
        <div class="search-title-container">
            <h2>Sementes</h2>
            <p>Digite o nome da semente que deseja no campo de busca para filtra-la por nome.</p>
        </div>
    </section>

    <section class="search-results-section">
        <span>Resultado da buscar por sementes</span>
        <div id="search-result-container"></div>
    </section>
</main>
<style>
    .search-page-card::after{
        background-image: url(./assets/imgs/background-search-seeds.png)
    }

</style>`;
}

function searchUsersPage() {
    return `<main>
    <section class="search-title-card search-page-card">
        <div class="search-title-container">
            <h2>Usuários</h2>
            <p>Digite o nome do usuário que deseja no campo de busca para filtra-la por nome.</p>
        </div>
    </section>

    <section class="search-results-section">
        <span>Resultado da buscar por usuários</span>
        <div id="search-result-container"></div>
    </section>
</main>
<style>
    .search-page-card::after{
        background-image: url(./assets/imgs/background-search-users.png)
    }

</style>`;
}

function searchLocationPage() {
    return `<main>
    <section class="search-title-card search-page-card">
        <div class="search-title-container">
            <h2>Localização</h2>
            <p>Digite o nome da localização que deseja no campo de busca para filtra-la por nome.</p>
        </div>
    </section>

    <section class="search-results-section">
        <span>Resultado da buscar por localização</span>
        <div id="search-result-container"></div>
    </section>
</main>
<style>
    .search-page-card::after{
        background-image: url(./assets/imgs/background-search-location.png)
    }

</style>
`;
}

export {
    searchLocationPage,
    searchSeedsPage,
    searchPlantsPage,
    searchUsersPage,
};
