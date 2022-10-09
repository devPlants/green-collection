
function searchPlantsPage(){




    return ` <main>
    <section class="search-title-card search-page-card">
        <div class="search-title-container">
            <h2>Plantas</h2>
            <p>Digite o nome da planta que deseja no campo de busca para filtra-la por nome.</p>
        </div>
    </section>

    <section class="search-results-section">
        <span>Resultado da buscar por plantas</span>
        <div id="search-result-container"></div>
    </section>
</main>`
}

function searchSeedsPage(){


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

</style>`
}


function searchUsersPage(){


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

</style>`
}


function searchLocationPage(){


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
`
}

export { searchLocationPage, searchSeedsPage, searchPlantsPage, searchUsersPage }