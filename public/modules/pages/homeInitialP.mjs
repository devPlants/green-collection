export function homeInitialMainHTML() {

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
                    <div class="search-card" onclick="renderPage.login()">
                        <div class="title-serch-card">
                            <h2>Planta</h2>
                        </div>
                    </div>
                    <div class="search-card" onclick="renderPage.login()">
                        <div class="title-serch-card">
                            <h2>Semente</h2>
                        </div>
                    </div>
                    <div class="search-card" onclick="renderPage.login()">
                        <div class="title-serch-card">
                            <h2>Usuário</h2>
                        </div>
                    </div>
                    <div class="search-card" onclick="renderPage.login()">
                        <div class="title-serch-card">
                            <h2>Localização</h2>
                        </div>
                    </div>
                    <img src="./assets/imgs/logo.png" alt="" width="30px" height="30px" id="cards-logo">
                </div>
            </section>`;
}