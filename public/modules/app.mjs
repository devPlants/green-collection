import { loginHeader, loginMain } from "./pages/login.mjs";
import { homeMain, homeHeader } from "./pages/home.mjs";
import { login } from "./validation.mjs";
import { modalCreate } from "./modal.mjs"
import { signupMain } from "./pages/signup.mjs";

let loginBtn;
let token;


const header = document.querySelector('header');
const main = document.querySelector('main');
const searchCard = document.querySelectorAll('.search-card');
let signUpBtn;

function homePage(){
    header.innerHTML = homeHeader(token);
    main.innerHTML = homeMain(token);
}

function loginPage(){
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
    token = response;
    // console.log(typeof(token));
    homePage();
    });
}

function signUpPage(){
    header.innerHTML = loginHeader;
    main.innerHTML = signupMain;
}

searchCard.forEach(element => {
    element.addEventListener('click', loginPage);
});

window.signUpPage = signUpPage;
window.loginPage = loginPage;
window.modalCreate = modalCreate;