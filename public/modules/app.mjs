import { loginHeader, loginMain } from "./pages/login.mjs";
import { homeMain, homeHeader } from "./pages/home.mjs";
import { login } from "./validation.mjs";

let loginBtn;
let token;

const header = document.querySelector('header');
const main = document.querySelector('main');
const searchCard = document.querySelectorAll('.search-card');

searchCard.forEach((element) => {
    element.addEventListener('click', () => {

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
        console.log(token);
        header.innerHTML = homeHeader;
        main.innerHTML = homeMain;
        });
    })
});





