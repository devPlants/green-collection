import { getToken } from "./app.mjs";

export async function update() {
    const forms = document.querySelector('#form-update')

    const form = new FormData(forms);

    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'autorization': `${getToken().token}`
        },
    };

    options.body = form;


    const response = await fetch(`http://localhost:8000/${getToken.userId}'`, options) 
    const data = await response.json();
    console.log(data);
    return data;
}