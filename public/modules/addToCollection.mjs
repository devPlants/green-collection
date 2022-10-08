import { getToken } from "./app.mjs";
import { homeMain, homeHeader, dataUser } from "./pages/home.mjs";

export async function addToCollection() {
    const forms = document.querySelector('#modal-form');
    const form = new FormData(forms);

    const options = {
        method: 'POST',
        headers: {
            'authorization': `${getToken().token}`
        }
    };

    // console.log(getToken().token)
    options.body = form;

    const response = await fetch('http://localhost:8000/products', options);
    const data = await response.json();
    // console.log(data);
    forms.reset();
    document.querySelector('#add-image').style = "background-image: none;";
    document.querySelector('.modal').style.display = 'none';

    document.querySelector("header").innerHTML = await homeHeader(getToken().dataUser);
    document.querySelector("main").innerHTML = await homeMain(getToken().dataUser, getToken().token);

    return data;
}