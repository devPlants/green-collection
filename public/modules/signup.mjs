import { renderHomeBySignup } from "../app.mjs";

const completeAddress = (address) =>{
    document.getElementById("addressInputUser").value = address.logradouro;
    document.getElementById("cityInputUser").value = address.localidade;
    document.getElementById("stateInputUser").value = address.uf;
}

export async function searchCep(){
    const cep =  document.getElementById("cepInputUser").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const data = await fetch(url);
    const address = await data.json();
    completeAddress(address);   
}


export async function signup() {
    const emailUser = document.querySelector("#email-input");
    const passwordUser = document.querySelector("#password-input");

    const forms = document.querySelector('#form-signup')

    const form = new FormData(forms);

    if (
        form.get('name').length < 3 ||
        form.get('email').length < 3 ||
        form.get('phoneNumber').length < 1 ||
        form.get('address').length < 3 ||
        form.get('number').length < 1 ||
        form.get('city').length < 3 ||
        form.get('state').length < 2 ||
        form.get('password').length < 3 ||
        form.get('confirm-passwd').length < 3
    ) {
        window.renderPage.modalAlert('Todos os campos são de preenchimento obrigatório!', 'red');
        return 400;
    }

    if (form.get('cpf').length != 11) {
        window.renderPage.modalAlert('O CPF precisa conter 11 caracteres (Somente números)', 'red');
        return 400;
    }

    if (form.get('zipCode').length != 8) {
        window.renderPage.modalAlert('O CEP precisa conter 8 caracteres (Somente números)', 'red');
        return 400;
    }

    if (form.get('phoneNumber').length < 8) {
        window.renderPage.modalAlert('O telefone contém menos de 8 números!', 'red');
        return 400;
    }

    if (form.get('phoneNumber').length > 11) {
        window.renderPage.modalAlert('O telefone contém mais de 11 números!', 'red');
        return 400;
    }

    if (form.get('password') != form.get('confirm-passwd')) {
        window.renderPage.modalAlert('Senhas não conferem, digite novamente!', 'red');
        return 400;
    }

    if (form.get('photo').name == '') {
        window.renderPage.modalAlert('Adicione sua foto!', 'red');
        return 400;
    }

    const options = {
        method: 'POST'
    };

    options.body = form;

    const response = await fetch('/users', options)
    if (response.status != 201) {
        window.renderPage.modalAlert('EMAIL OU CPF JÁ CADASTRADO!', 'red');
        return 400;
    }
    const data = await response.json()
    const responseUser = await getToken(emailUser.value, passwordUser.value);
    renderHomeBySignup(responseUser.token, responseUser.userId);
    return true;

    async function getToken(_email, _password) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"email":"${_email}","password":"${_password}"}`
        };
        try {
            const response = await fetch('/login', options);
            if (response.status >= 300) {
                window.renderPage.modalAlert('Ocorreu um erro ao tentar entrar em sua conta recém-criada, tente entrar manualmente ou contacte o administrador!', 'red');
                return 400;
            }
            const data = await response.json();
            return data;
        } catch (err) {
            window.renderPage.modalAlert(`Ocorreu um erro na requisição de login, entre manualmente ou contacter o administrador. Erro: ${err}`, 'red');
        }
    }
}
