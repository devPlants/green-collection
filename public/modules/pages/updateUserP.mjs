export function updateMainHTML() {

    return `<div class="update-title-container">
                <div onclick='renderPage.home()' style='cursor:pointer; display:flex; padding:20px;'>&larr;</div>   
                <h2 id="update-title">Informações de usuário</h2>
            </div>
            <section class="update-section">
                <form id="form-update" enctype="multipart/form-data">
                <div class="update-wrapper">
                    <div class="update-inputs-container">
                        <div class="first-input-container">
                            <div class="name-container  label">
                                <label for="name">Nome:</label>
                                <input type="text" name="name">
                            </div>
                            <div class="update-email-container label">
                                <label for="email">E-mail:</label>
                                <input type="text" name="email">
                            </div>
                        </div>
                        <div class="second-input-container">
                            <div class="cpf-container label">
                                <label for="cpf">CPF:</label>
                                <input type="text" name="cpf">
                            </div>
                            <div class="phone-container label">
                                <label for="phone">Telefone:</label>
                                <input type="text" name="phoneNumber">
                            </div>
                        </div>
                        <div class="zipcode-input-container">
                            <div class="zipcode-container label">
                                <label for="zipcode">CEP:</label>
                                <input type="text" name="zipCode">
                            </div>
                        </div>
                        <div class="third-input-container">
                            <div class="address-container label">
                                <label for="address">Endereço:</label>
                                <input type="text" name="address">
                            </div>
                            <div class="number-container label">
                                <label for="number">Nº:</label>
                                <input type="text" name="number">
                            </div>
                        </div>
                        <div class="fourth-input-container">
                            <div class="city-container label">
                                <label for="city">Cidade:</label>
                                <input type="text" name="city">
                            </div>
                            <div class="state-container label">
                                <label for="state">Estado:</label>
                                <input type="text" name="state">
                            </div>
                        </div>
                        <div class="fifth-input-container">
                            <div class="update-passwd-container label">
                                <label for="passwd">Senha:</label>
                                <input type="text" name="password">
                            </div>
                            <div class="confirm-passwd-container label">
                                <label for="confirm-passwd">Confirme sua senha:</label>
                                <input type="text" name="confirm-passwd">
                            </div>
                        </div>
                    </div>
                    <div class="photo-wrapper">
                        <div class="photo-container">
                        </div>
                        <label for='photo-btn' class="label-for-photo-btn"> Alterar Foto</label>
                        <input id="photo-btn" type="file" name="photo">
                    </div>
                </div>
                <div class="btn-container">
                    <button id="update-btn" type="button" onclick="update()">Atualizar</button>
                </div>
            </form>
            </section>
            `;
}