import { getData } from "../../app.mjs";


async function getCollection() {
    const collectionOnDisplay = document.querySelectorAll('.offer-products-ondisplay');

    const options = {
        method: 'GET',
        header: {
            authorization: `${getData().token}`
        }
    }
    try {
        const response = await fetch('http://localhost:8000/collections/?rows=9&page=1', options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Ocorreu um erro na requisição à coleção: ${err}`);
        return 400;
    }

    collectionOnDisplay.forEach(element => {
        element.style.backgroundImage = `url(${data.user_photo})`;
    })
}

export { getCollection }
