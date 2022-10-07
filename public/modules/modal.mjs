export function modalCreate() {
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-btn');

    modal.style.display = "block";

    closeModalBtn.addEventListener('click', () => {
        document.querySelector('#add-image').style = "background-image: none;";
        document.querySelector('#modal-form').reset();

        modal.style.display = 'none';
    })
}