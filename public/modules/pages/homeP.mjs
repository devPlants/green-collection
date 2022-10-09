export function homeMainHTML(_cardsCollection) {

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

                    <div class="collection-card" id="create-card" onclick="renderPage.modalCreate()">
                        <img src="./assets/imgs/add.png" alt="" width="42px" height="64px">
                        <span>Adicionar à coleção</span>
                    </div>              

                    ${_cardsCollection}

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
                                    <button type="button" id="add-product-btn" onclick="renderPage.addToCollection()">Adicionar</button>
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
            </section>`;
}