import { decodeToken } from "./modules/decodeToken.mjs";
import { pagesHTML } from "./modules/services/index.mjs";
import { modalAlert } from "./modules/modalAlert.mjs";
import { loginToken } from "./modules/loginValidation.mjs";
import { modalCreate } from "./modules/modal.mjs";
import { addToCollection } from "./modules/addToCollection.mjs";
import { renderExchanges } from "./modules/pages/exchangeP.mjs";
import { updateExchanges } from "./modules/updateExchanges.mjs";
import { printImg } from "./modules/printImg.mjs";
import { signup } from "./modules/signup.mjs";

const header = document.querySelector("header");
const main = document.querySelector("main");

let token = "";
let dataUser = ""; // {address,admin,city,cpf,email,id,name,number,phone_number,photo,state,zip_code}
export function getData() {
    return { token, dataUser };
}

const renderPages = {
    login: () => {
        header.innerHTML = "";
        main.innerHTML = "";
        header.innerHTML = pagesHTML.loginHeader();
        main.innerHTML = pagesHTML.loginMain();
    },

    homeInitial: async () => {
        header.innerHTML = "";
        main.innerHTML = "";
        header.innerHTML = pagesHTML.initialHeader();
        main.innerHTML = pagesHTML.homeInitialMain();
    },

    home: async () => {
        if (document.querySelector("#email-input")) {
            const response = await login();
            header.innerHTML = "";
            header.innerHTML = pagesHTML.homeHeader(dataUser);
            if (response == 400) {
                return;
            }
        }

        main.innerHTML = "";
        main.innerHTML = await pagesHTML.homeMain();
        printImg("#add-image", "#add-image-btn");
    },

    updateUserMain: () => {
        main.innerHTML = "";
        main.innerHTML = pagesHTML.updateUserMain();
        activeDropdown();
        printImg(".photo-container", "#photo-btn");
    },

    signupMain: () => {
        main.innerHTML = "";
        main.innerHTML = pagesHTML.signupMain();
        printImg(".photo-container", "#photo-btn");
    },

    exchangeMain: () => {
        main.innerHTML = "";
        main.innerHTML = pagesHTML.exchangeMain();
    },

    searchPlantsPage: () => {
        main.innerHTML = "";
        main.innerHTML = pagesHTML.searchPlantsPage();
        window.scrollTo(0, 0);
    },

    searchSeedsPage: () => {
        main.innerHTML = "";
        main.innerHTML = pagesHTML.searchSeedsPage();
        window.scrollTo(0, 0);
    },

    searchUsersPage: () => {
        main.innerHTML = "";
        main.innerHTML = pagesHTML.searchUsersPage();
        window.scrollTo(0, 0);
    },

    searchLocationPage: () => {
        main.innerHTML = "";
        main.innerHTML = pagesHTML.searchLocationPage();
        window.scrollTo(0, 0);
    },
};

export async function renderHomeBySignup(_token, _userId) {
    token = _token;
    document.cookie = `${token}`;
    dataUser = await decodeToken(token, _userId);
    renderPages.home();
    window.renderPage.modalAlert(
        `Olá ${dataUser.name}, seu cadastro foi realizado com sucesso. Bem vindo ao Green Collection!`,
        "green"
    );
}

function finallyExchange(productId1, productId2, status, id) {
    updateExchanges(productId1, productId2, status, id);
}

async function login() {
    const response = await loginToken();
    if (response == 400) {
        return response;
    }

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
    activeDropdown: activeDropdown,
    modalCreate: modalCreate,
    addToCollection: addToCollection,
    exchanges: renderExchanges,
    signup: signup,

    login: renderPages.login,
    homeInitial: renderPages.homeInitial,
    home: renderPages.home,
    updateUserMain: renderPages.updateUserMain,
    signupMain: renderPages.signupMain,
    searchPlantsPage: renderPages.searchPlantsPage,
    searchSeedsPage: renderPages.searchSeedsPage,
    searchUsersPage: renderPages.searchUsersPage,
    searchLocationPage: renderPages.searchLocationPage,
};
