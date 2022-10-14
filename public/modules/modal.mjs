export function modalCreate() {
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-btn');

    modal.style.display = "block";

    closeModalBtn.addEventListener('click', () => {
        document.querySelector('#add-image').style = "background-image: none;";
        document.querySelector('#modal-form').reset();

        modal.style.display = 'none';
    })

    function readImage() {
        if (this.files && this.files[0]) {
            const file = new FileReader();
            file.onload = function (e) {
                const photoContainer =
                    document.querySelector(`${"#add-image"}`);
                photoContainer.style = `background-image: url(${e.target.result});
                                        background-size: cover;
                                        background-position: center;`;
            };
            file.readAsDataURL(this.files[0]);
        }
    }
    document.querySelector(`${"#add-image-btn"}`).addEventListener("change", readImage, false);
}