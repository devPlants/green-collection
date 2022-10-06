export function modalCreate() {
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-btn');

    modal.style.display = "block";

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}