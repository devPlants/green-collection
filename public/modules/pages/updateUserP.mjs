export function updateMainHTML(dataUser) {

    return `<div class="update-title-container">
    <div style='display:flex; padding: 2rem 0 0 2rem; position:absolute;'>
    <span onclick='renderPage.home()' style='cursor:pointer;'> &larr;
    </span></div>   
                <h2 id="update-title">Informações de usuário</h2>
            </div>
            <section class="update-section">
                <form id="form-update" enctype="multipart/form-data">
                <div class="update-wrapper">
                    <div class="update-inputs-container">
                        <div class="first-input-container">
                            <div class="name-container  label">
                                <label for="name">Nome:</label>
                                <input type="text" name="name" value="${dataUser.name}">
                            </div>
                            <div class="update-email-container label">
                                <label for="email">E-mail:</label>
                                <input type="email" value="${dataUser.email}" disabled="">
                            </div>
                        </div>
                        <div class="second-input-container">
                            <div class="cpf-container label">
                                <label for="cpf">CPF:</label>
                                <input type="text" value="${dataUser.cpf}" disabled="">
                            </div>
                            <div class="phone-container label">
                                <label for="phone">Telefone:</label>
                                <input type="text" name="phone_number" value="${dataUser.phone_number}">
                            </div>
                        </div>
                        <div class="zipcode-input-container">
                            <div class="zipcode-container label">
                                <label for="zipcode">CEP:</label>
                                <input type="text" name="zip_code" value="${dataUser.zip_code}">
                            </div>
                        </div>
                        <div class="third-input-container">
                            <div class="address-container label">
                                <label for="address">Endereço:</label>
                                <input type="text" name="address" value="${dataUser.address}">
                            </div>
                            <div class="number-container label">
                                <label for="number">Nº:</label>
                                <input type="text" name="number" value="${dataUser.number}">
                            </div>
                        </div>
                        <div class="fourth-input-container">
                            <div class="city-container label">
                                <label for="city">Cidade:</label>
                                <input type="text" name="city" value="${dataUser.city}">
                            </div>
                            <div class="state-container label">
                                <label for="state">Estado:</label>
                                <input type="text" name="state" value="${dataUser.state}">
                            </div>
                        </div>

                    </div>
                    <div class="photo-wrapper">
                        <div class="photo-container" style='background-size: cover; background-image: url(http://localhost:8000/files/${dataUser.photo});'>
                        </div>
                        <label for='photo-btn' class="label-for-photo-btn"> Alterar Foto</label>
                        <input id="photo-btn" type="file" name="photo">
                    </div>
                </div>
                <div class="btn-container">
                    <button id="update-btn" type="button" onclick="renderPage.updateUser()">Atualizar</button>
                </div>
            </form>
            </section>
            `;
}