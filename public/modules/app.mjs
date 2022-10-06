import { loginHeader, loginMain } from "./pages/login.mjs";
import { homeMain, homeHeader, dataUser } from "./pages/home.mjs";
import { login } from "./validation.mjs";
import { modalCreate } from "./modal.mjs"
import { signupMain } from "./pages/signup.mjs";

let loginBtn;
let token;
let userId;


const header = document.querySelector('header');
const main = document.querySelector('main');
const searchCard = document.querySelectorAll('.search-card');
let signUpBtn;

async function homePage() {
    const data = await dataUser(token, userId);
    if (data.status == 400) { return `Erro na requisição: ${data.err}` }
    header.innerHTML = await homeHeader(data);
    main.innerHTML = homeMain(data);
}

function loginPage() {
    header.innerHTML = '';
    main.innerHTML = '';

    header.innerHTML = loginHeader;
    main.innerHTML = loginMain;
    loginBtn = document.querySelector('#login-btn');
    loginBtn.addEventListener('click', async () => {

        const response = await login();
        if (response == 400) {
            console.log(`Email ou senha não válidos`);
            return;
        }
        token = response.token;
        userId = response.userId;
        homePage();
    });
}

function signUpPage() {
    header.innerHTML = loginHeader;
    main.innerHTML = signupMain;
}

searchCard.forEach(element => {
    element.addEventListener('click', loginPage);
});

window.signUpPage = signUpPage;
window.loginPage = loginPage;
window.modalCreate = modalCreate;