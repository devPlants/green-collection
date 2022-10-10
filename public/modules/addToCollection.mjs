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

    const response = await fetch('/products', options);
    const data = await response.json();

    forms.reset();
    document.querySelector('#add-image').style = "background-image: none;";
    document.querySelector('.modal').style.display = 'none';

    if (data.collection == 'collections created') {
        setTimeout(() => { window.renderPage.modalAlert('Produto adicionado com sucesso!', 'green'); }, 500);
    } else {
        setTimeout(() => { window.renderPage.modalAlert('Falha ao adicionar produto à coleção, recarregue e tente novamente!', 'red'); }, 500);
    }

    window.renderPage.home();

    return data;
}