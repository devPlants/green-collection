export async function addToCollection() {
    const forms = document.querySelector('#modal-form');
    const form = new FormData(forms);

    const options = {
        method: 'POST',
        headers: {
            'authorization': `${document.cookie}`
        }
    };

    options.body = form;

    const response = await fetch('http://localhost:8000/products', options);
    const data = await response.json();

    if (data.collection == 'collections created') {
        window.renderPage.modalAlert('Produto adicionado com sucesso!', 'green');
    } else {
        window.renderPage.modalAlert('Falha ao adicionar produto à coleção, recarregue e tente novamente!', 'red');
    }
    
    forms.reset();
    document.querySelector('#add-image').style = "background-image: none;";
    document.querySelector('.modal').style.display = 'none';

    window.renderPage.home();
    return data;
}