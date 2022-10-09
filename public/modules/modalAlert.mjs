function modalAlert(txt, color) {

    const div = document.createElement('div');
    div.id = 'modalNotification';
    div.textContent = `${txt}`;
    color == 'red' ? div.classList.add('modalNotfRed') : div.classList.add('modalNotfGreen');
    document.querySelector('main').appendChild(div);

    setTimeout(() => {
        div.parentNode.removeChild(div);
    }, 2000);

}

export { modalAlert };