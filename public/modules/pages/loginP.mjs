export function loginMainHTML() {
    return `<section class="login-section">
                <div class="login-wrapper">

                    <div class="login-title-container">
                        <h2 id="login-title">Login</h2>
                    </div>

                    <div class="inputs-container">

                        <div class="email-container">
                            <label for="email">E-mail:</label>
                            <input type="text" name="email" id="email-input">
                        </div>

                        <div class="passwd-container">
                            <label for="passwd">Senha:</label>
                            <input type="password" name="passwd" id="passwd-input">
                            <span id="forgot-passwd" onclick='renderPage.updatePass()'>Esqueceu sua senha?</span>
                        </div>

                        <div class="btns-container">
                            <button id="signup-btn" type="button" onclick="renderPage.signupMain()">Cadastrar</button>
                            <button id="login-btn" type="button" onclick="renderPage.home()">Entrar</button>
                        </div>

                        <span id="valid-container"></span>
                    </div>
                </div>
                <img src="./assets/imgs/logo.png" alt="" width="150px" height="150px">
            </section>`;
}