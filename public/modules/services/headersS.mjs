import { initialHeaderHTML, loginHeaderHTML, homeHeaderHTML, homeHeaderAdminHTML } from "../pages/headersP.mjs";

export function initialHeaderS() {

    return initialHeaderHTML();
}

export function loginHeaderS() {

    return loginHeaderHTML();
}

export function homeHeaderS(dataUser) {

    const nameFull = dataUser.name.split(" ");
    const name1 = nameFull[0];
    const name2 = nameFull[1];
    const nameEnd = name2 == undefined ? name1 : `${name1} ${name2}`;

    return homeHeaderHTML(nameEnd, dataUser.email, dataUser.photo);
}

export function homeHeaderAdminS(dataUser) {

    const nameFull = dataUser.name.split(" ");
    const name1 = nameFull[0];
    const name2 = nameFull[1];
    const nameEnd = name2 == undefined ? name1 : `${name1} ${name2}`;

    return homeHeaderAdminHTML(nameEnd, dataUser.email, dataUser.photo);
}