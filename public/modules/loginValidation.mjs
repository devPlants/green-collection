export async function loginToken() {

    const userEmail = document.querySelector("#email-input").value;
    const userPasswd = document.querySelector("#passwd-input").value;

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: `{"email":"${userEmail}","password":${userPasswd}}`,
    };

    async function requisition() {
        try {
            const response = await fetch("/login", options);
            if (response.status >= 300) {
                window.renderPage.modalAlert('Email incorreto ou senha inválida, tente novamente ou faça seu cadastro!', 'red');
                return 400;
            }
            const data = await response.json();
            return data;
        } catch (err) {
            window.renderPage.modalAlert(`Ocorreu um erro na requisição, recarrege a página e tente novamente ou contacte o administrador! Erro: ${err}`, 'red');
            return 400;
        }
    }
    const token = await requisition();
    return token;
}
