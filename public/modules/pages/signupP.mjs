export function signupMainHTML() {

    return ` <div class="singup-title-container">
                <div style='display:flex; padding: 2rem 0 0 2rem; position:absolute '>
                <span onclick='renderPage.login()' style='cursor:pointer;'> &larr;
                </span></div>
                <h2 id="singup-title">Cadastro</h2>
                </div>
                <section class="singup-section">
                <form id="form-signup" enctype="multipart/form-data" >
                    <div class="singup-wrapper">
                        <div class="signup-inputs-container">
                                <div class="first-input-container">
                                    <div class="name-container  label">
                                        <label for="name">Nome:</label>
                                        <input type="text" name="name">
                                    </div>
                                    <div class="signup-email-container label">
                                        <label for="email">E-mail:</label>
                                        <input type="email" id ="email-input" name="email">
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
                                        <input id ="cepInputUser" onfocusout = "renderPage.searchCep()" type="text" name="zipCode">
                                    </div>
                                    <div class="district-container label">
                                        <label for="district">Bairro:</label>
                                        <input id ="districtInputUser" type="text">
                                    </div>
                                </div>
                                <div class="third-input-container">
                                    <div class="address-container label">
                                        <label for="address">Endere??o:</label>
                                        <input id ="addressInputUser" type="text" name="address">
                                    </div>
                                    <div class="number-container label">
                                        <label for="number">N??:</label>
                                        <input type="text" name="number">
                                    </div>
                                </div>
                                <div class="fourth-input-container">
                                    <div class="city-container label">
                                        <label for="city">Cidade:</label>
                                        <input id ="cityInputUser" type="text" name="city">
                                    </div>
                                    <div class="state-container label">
                                        <label for="state">Estado:</label>
                                        <input id ="stateInputUser" type="text" name="state">
                                    </div>
                                </div>
                                <div class="fifth-input-container">
                                    <div class="signup-passwd-container label">
                                        <label for="passwd">Senha:</label>
                                        <input type="password" id="password-input" name="password">
                                    </div>
                                    <div class="confirm-passwd-container label">
                                        <label for="confirm-passwd">Confirme sua senha:</label>
                                        <input type="password" name="confirm-passwd">
                                    </div>
                                </div>
                            </div>
                            <div class="photo-wrapper">
                            <div class= "photo-container">
                            </div>
                            <label for='photo-btn' class="label-for-photo-btn"> Adicionar Foto</label>
                            <input id="photo-btn" type="file" name="photo">
                        </div> 
                    </div>
                    <div class="btn-container">
                        <button id="signup-btn" type="button" onclick="renderPage.signup()">Cadastrar</button>
                    </div>
                </form>
                </section> `;
}