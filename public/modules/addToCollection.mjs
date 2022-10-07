import { getToken } from "./app.mjs";

export async function addToCollection(){
    const forms = document.querySelector('#modal-form');
    const form = new FormData(forms);

    const options = {
        method: 'POST',
        headers: {
            'authorization': `${getToken().token}`
          }
    };


    console.log(getToken().token)
    options.body = form;
    
    const response = await fetch('http://localhost:8000/products', options);
    const data =  await response.json();
    console.log(data);
    forms.reset();

    return data;

}