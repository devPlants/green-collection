const signupMain = ` <div class="singup-title-container">
<h2 id="singup-title">Cadastro</h2>
</div>
<section class="singup-section">
<div class="singup-wrapper">
    <div class="signup-inputs-container">
        <div class="first-input-container">
            <div class="name-container  label">
                <label for="name">Nome:</label>
                <input type="text" name="nome">
            </div>
            <div class="signup-email-container label">
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
                <input type="text" name="phone">
            </div>
        </div>
        <div class="zipcode-input-container">
            <div class="zipcode-container label">
                <label for="zipcode">CEP:</label>
                <input type="text" name="zipcode">
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
                <label for="state">Cidade:</label>
                <input type="text" name="state">
            </div>
        </div>
        <div class="fifth-input-container">
            <div class="signup-passwd-container label">
                <label for="passwd">Senha:</label>
                <input type="text" name="passwd">
            </div>
            <div class="confirm-passwd-container label">
                <label for="confirm-passwd">Confirme sua senha:</label>
                <input type="text" name="confirm-passwd">
            </div>
        </div>
    </div>
</div>
<div class="photo-wrapper">
    <div class= "photo-container">
    </div>
    <button id="photo-btn" type="button">Adicionar imagem</button>
</div>
</section>
<div class="btn-container">
<button id="signup-btn" type="button">CADASTRAR</button>
</div>`;

export {signupMain}