import { updateMainHTML } from "../pages/updateUserP.mjs";

export async function updateUserMainS(dataUser) {
        
        const url = `https://viacep.com.br/ws/${dataUser.zip_code}/json/`;
        
        const data = await fetch(url);
        const address = await data.json();
        dataUser.district= address.bairro;
   
    return updateMainHTML(dataUser);
}
