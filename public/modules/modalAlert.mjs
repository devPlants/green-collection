function modalAlert(txt, color) {

    const div = document.createElement('div');
    div.id = 'modalNotification';
    div.textContent = `${txt}`;
    color == 'red' ? div.classList.add('modalNotfRed') : div.classList.add('modalNotfGreen');
    document.querySelector('main').appendChild(div);

    setTimeout(() => {
        if (document.querySelector('#modalNotification')) {
            div.parentNode.removeChild(div);
        }
    }, 4000);

}

export { modalAlert };