import { loginHeader, loginMain } from "./pages/login.mjs";
import { homeMain, homeHeader, dataUser } from "./pages/home.mjs";
import { login } from "./validation.mjs";
import { modalCreate } from "./modal.mjs";
import { signupMain } from "./pages/signup.mjs";
import { signup } from "./signup.mjs";
import { addToCollection } from "./addToCollection.mjs";
import { pageExchanges } from "./pages/exchanges.mjs";
import { pageUpdate } from "./pages/pageUpdate.mjs";

let loginBtn;
let token;
let userId;
let dataUserInfo;

const header = document.querySelector("header");
const main = document.querySelector("main");
const searchCard = document.querySelectorAll(".search-card");

export function renderHomeBySignup(_token, _userId) {
    token = _token;
    userId = _userId;
    document.cookie = `${token}`

    homePage();
}

export function getToken() {
    return { token: token, userId: userId, dataUser: dataUserInfo };
}

async function homePage() {
    const data = await dataUser(token, userId);
    dataUserInfo = data;

    if (data.status == 400) {
        console.log(`Erro na requisição: ${data.err}`);
        return `Erro na requisição: ${data.err}`;
    }

    header.innerHTML = '';
    main.innerHTML = '';

    header.innerHTML = await homeHeader(data);
    main.innerHTML = await homeMain(data, token);

    function readImage() {
        if (this.files && this.files[0]) {
            const file = new FileReader();
            file.onload = function (e) {
                const photoContainer = document.querySelector("#add-image");
                photoContainer.style = `background-image: url(${e.target.result});
                                        background-size: cover;
                                        background-position: center;`;
            };
            file.readAsDataURL(this.files[0]);
        }
    }
    document.querySelector("#add-image-btn").addEventListener("change", readImage, false);
}

function activeDropdown() {
    const dropDown = document.querySelector('.menu-user-header');
    dropDown.classList.toggle('displayFlex');
}

function generateExchanges() {
    main.innerHTML = '';
    main.innerHTML = pageExchanges();
    activeDropdown();
}

function generateUpdate() {
    main.innerHTML = '';
    main.innerHTML = pageUpdate();
    activeDropdown();
}

function loginPage() {
    header.innerHTML = '';
    main.innerHTML = '';

    header.innerHTML = loginHeader;
    main.innerHTML = loginMain;
    loginBtn = document.querySelector("#login-btn");
    loginBtn.addEventListener("click", async () => {
        const response = await login();
        if (response == 400) {
            console.log(`Email ou senha não válidos`);
            return;
        }
        token = response.token;
        userId = response.userId;
        document.cookie = `${token}`
        homePage();
    });
}

function signUpPage() {
    header.innerHTML = loginHeader;
    main.innerHTML = signupMain;
    function readImage() {
        if (this.files && this.files[0]) {
            const file = new FileReader();
            file.onload = function (e) {
                const photoContainer = document.querySelector(".photo-container");
                photoContainer.style = `background-image: url(${e.target.result});
                                        background-size: cover;
                                        background-position: center;`;
            };
            file.readAsDataURL(this.files[0]);
        }
    }

    document.querySelector("#photo-btn").addEventListener("change", readImage, false);
}

searchCard.forEach((element) => {
    element.addEventListener("click", loginPage);
});

window.signUpPage = signUpPage;
window.loginPage = loginPage;
window.modalCreate = modalCreate;
window.signup = signup;
window.addToCollection = addToCollection;
window.activeDropdown = activeDropdown;
window.pageExchanges = generateExchanges;
window.pageUpdate = generateUpdate;
