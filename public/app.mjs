import { decodeToken } from "./modules/decodeToken.mjs";
import { pagesHTML } from "./modules/services/index.mjs";
import { modalAlert } from "./modules/modalAlert.mjs";
import { loginToken } from "./modules/loginValidation.mjs";
import { modalCreate } from "./modules/modal.mjs";
import { addToCollection } from "./modules/addToCollection.mjs";
import { renderExchanges } from "./modules/pages/exchangeP.mjs";

const header = document.querySelector("header");
const main = document.querySelector("main");

let token = '';
let dataUser = ''; // {address,admin,city,cpf,email,id,name,number,phone_number,photo,state,zip_code}
export function getData() { return { token, dataUser } };


const renderPages = {
    login: () => {
        header.innerHTML = '';
        main.innerHTML = '';
        header.innerHTML = pagesHTML.loginHeader();
        main.innerHTML = pagesHTML.loginMain();
    },

    home: async () => {
        if (document.querySelector("#email-input")) {
            const response = await login();
            if (response == 400) { return };
        }

        header.innerHTML = '';
        main.innerHTML = '';
        header.innerHTML = pagesHTML.homeHeader(dataUser);
        main.innerHTML = await pagesHTML.homeMain();
    },

    updateUserMain: () => {
        main.innerHTML = '';
        main.innerHTML = pagesHTML.updateUserMain();
        activeDropdown();
    },

    signupMain: () => {
        main.innerHTML = '';
        main.innerHTML = pagesHTML.signupMain();
    },

    exchangeMain: () => {
        main.innerHTML = '';
        main.innerHTML = pagesHTML.exchangeMain();
    }
}

async function login() {

    const response = await loginToken();
    if (response == 400) { return response }

    token = response.token;
    document.cookie = `${token}`;

    dataUser = await decodeToken(token, response.userId);
    return 200;
}

function activeDropdown() {
    const dropDown = document.querySelector(".menu-user-header");
    dropDown.classList.toggle("displayFlex");
}

window.renderPage = {
    modalAlert: modalAlert,
    login: renderPages.login,
    home: renderPages.home,
    activeDropdown: activeDropdown,
    modalCreate: modalCreate,
    addToCollection: addToCollection,
    updateUserMain: renderPages.updateUserMain,
    signupMain: renderPages.signupMain,
    exchanges: renderExchanges,
}