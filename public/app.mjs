import { decodeToken } from "./modules/decodeToken.mjs";
import { pagesHTML } from "./modules/services/index.mjs";
import { modalAlert } from "./modules/modalAlert.mjs";
import { loginToken } from "./modules/loginValidation.mjs";
import { modalCreate } from "./modules/modal.mjs";
import { addToCollection } from "./modules/addToCollection.mjs";
import { contact, renderExchanges } from "./modules/pages/exchangeP.mjs";
import { updateExchanges } from "./modules/updateExchanges.mjs";
import { printImg } from "./modules/printImg.mjs";
import { signup, searchCep } from "./modules/signup.mjs";
import { searchBtn, typesSearch } from "./modules/services/searchBtn.js";
import { updateUser } from "./modules/updateUser.mjs";
import { approvalAdmin } from "./modules/services/adminS.mjs";
import { askTrade, selectProduct } from "./modules/services/tradeRequest.mjs";
import { tradePagination } from "./modules/services/tradeS.mjs";
import { renderHomePaginate } from "./modules/services/homeS.mjs";

const header = document.querySelector("header");
const main = document.querySelector("main");

let token = "";
let dataUser = ""; // {address,admin,city,cpf,email,id,name,number,phone_number,photo,state,zip_code}

if (document.cookie.length > 10) {
    dataUser = await decodeToken(document.cookie);
}

export function getData() {
    return { token, dataUser };
}

const renderPages = {
    login: () => {
        header.innerHTML = "";
        main.innerHTML = "";
        header.innerHTML = pagesHTML.loginHeader();
        main.innerHTML = pagesHTML.loginMain();
        cookieStore.getAll().then((cookies) =>
            cookies.forEach((cookie) => {
                cookieStore.delete(cookie.name);
            })
        );
    },

    homeInitial: async () => {
        header.innerHTML = "";
        main.innerHTML = "";
        header.innerHTML = pagesHTML.initialHeader();
        main.innerHTML = pagesHTML.homeInitialMain();
    },

    home: async () => {
        closeDropDown();

        if (
            document.querySelector("#email-input") &&
            !document.querySelector("#singup-title")
        ) {
            const response = await login();
            if (response == 400) {
                return;
            }
        }
        header.innerHTML = "";

        if (dataUser.admin == true) {
            header.innerHTML = pagesHTML.homeHeaderAdmin(dataUser);
        } else {
            header.innerHTML = pagesHTML.homeHeader(dataUser);
        }

        main.innerHTML = "";
        main.innerHTML = await pagesHTML.homeMain();
        printImg("#add-image", "#add-image-btn");
    },

    updateUserMain: async () => {
        main.innerHTML = "";
        main.innerHTML = await pagesHTML.updateUserMain(dataUser);
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

    searchPlantsPage: async (page, word) => {
        typesSearch("plant");
        main.innerHTML = "";
        main.innerHTML = await pagesHTML.searchPlantsPage(page, word);
        window.scrollTo(0, 0);
    },

    searchSeedsPage: async (page, word) => {
        typesSearch("seed");
        main.innerHTML = "";
        main.innerHTML = await pagesHTML.searchSeedsPage(page, word);
        window.scrollTo(0, 0);
    },

    searchUsersPage: async (page, word) => {
        typesSearch("users");
        main.innerHTML = "";
        main.innerHTML = await pagesHTML.searchUsersPage(page, word);
        window.scrollTo(0, 0);
    },

    searchLocationPage: async (page, word) => {
        typesSearch("local");
        main.innerHTML = "";
        main.innerHTML = await pagesHTML.searchLocationPage(page, word);
        window.scrollTo(0, 0);
    },

    admin: async () => {
        main.innerHTML = "";
        main.innerHTML = await pagesHTML.adminPage();
        activeDropdown();
    },

    updateUser: async () => {
        const response = await updateUser();
        if (response == 400) {
            return;
        }

        dataUser = await decodeToken(document.cookie, dataUser.id, "update");

        header.innerHTML = "";
        main.innerHTML = "";

        if (dataUser.admin == true) {
            header.innerHTML = pagesHTML.homeHeaderAdmin(dataUser);
        } else {
            header.innerHTML = pagesHTML.homeHeader(dataUser);
        }

        main.innerHTML = await pagesHTML.homeMain();
        printImg("#add-image", "#add-image-btn");
        cookieStore.getAll().then((cookies) =>
            cookies.forEach((cookie) => {
                cookieStore.delete(cookie.name);
            })
        );
    },

    trade: async (productId) => {
        main.innerHTML = "";
        main.innerHTML = await pagesHTML.tradePage(productId);
    },
};

export async function renderHomeBySignup(_token, _userId) {
    token = _token;
    document.cookie = `${token}`;
    dataUser = await decodeToken(token, _userId);

    if (dataUser.status == 400) {
        window.renderPage.modalAlert(
            `Ocorreu um erro na requisi????o do usu??rio! Tente fazer login ou contacte o administrador.`,
            "red"
        );
        return;
    }

    header.innerHTML = "";

    if (dataUser.admin == true) {
        header.innerHTML = pagesHTML.homeHeaderAdmin(dataUser);
    } else {
        header.innerHTML = pagesHTML.homeHeader(dataUser);
    }

    renderPages.home();
    setTimeout(() => {
        window.renderPage.modalAlert(
            `Ol?? ${
                dataUser.name.split(" ")[0]
            }, bem vindo(a) ao Green Collection :)`,
            "green"
        );
    }, 1000);
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

function updatePass() {
    window.renderPage.modalAlert(
        "Contacte o administrador para redefinir sua senha atrav??s do email: greenCollection@greenCollection.com",
        "red"
    );
}

window.renderPage = {
    modalAlert: modalAlert,
    activeDropdown: activeDropdown,
    modalCreate: modalCreate,
    addToCollection: addToCollection,
    exchanges: renderExchanges,
    signup: signup,
    searchBtn: searchBtn,
    approvalAdmin: approvalAdmin,
    closeDropDown: closeDropDown,
    searchCep: searchCep,
    selectProduct: selectProduct,
    askTrade: askTrade,
    tradePagination: tradePagination,
    responseExchanges: updateExchanges,
    updatePass: updatePass,
    renderHomePaginate: renderHomePaginate,
    contact: contact,

    updateUser: renderPages.updateUser,
    login: renderPages.login,
    homeInitial: renderPages.homeInitial,
    home: renderPages.home,
    updateUserMain: renderPages.updateUserMain,
    signupMain: renderPages.signupMain,
    searchPlantsPage: renderPages.searchPlantsPage,
    searchSeedsPage: renderPages.searchSeedsPage,
    searchUsersPage: renderPages.searchUsersPage,
    searchLocationPage: renderPages.searchLocationPage,
    admin: renderPages.admin,
    trade: renderPages.trade,
};

function closeDropDown() {
    if (
        document.querySelector(".menu-user-header") &&
        document.querySelector(".displayFlex")
    ) {
        document
            .querySelector(".menu-user-header")
            .classList.remove("displayFlex");
    }
}

if (document.cookie.length > 10) {
    window.renderPage.home();
} else {
    window.renderPage.homeInitial;
}

if (document.cookie.length < 10) {
    window.renderPage.homeInitial();
}
