import { renderHomeBySignup } from "./app.mjs";


export async function signup(){
    const emailUser= document.querySelector("#email-input");
    const passwordUser= document.querySelector("#password-input");

    const forms = document.querySelector('#form-signup')
    
        const form = new FormData(forms);

    async function getToken(_email, _password){
    const options = {
    method: 'POST'
    };

    options.body = form;

    const response = await fetch('http://localhost:8000/users', options)
    if (response.status != 201){
        return alert("Erro de cadastro!")
    }
    const data = await response.json()
    const token = await getToken(emailUser.value, passwordUser.value);
    renderHomeBySignup(token.token, token.userId);
    return true;
}

    async function getToken(_email, _password){
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"email":"${_email}","password":"${_password}"}`
            };
        try {
            const response = await fetch('/login', options);
            if(response.status >= 300){
                return 400;
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(`Erro na requisição: ${error}`);
        }

    }
