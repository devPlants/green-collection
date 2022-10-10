export function printImg(_img, _btnFile) {
    function readImage() {
        if (this.files && this.files[0]) {
            const file = new FileReader();
            file.onload = function (e) {
                const photoContainer =
                    document.querySelector(`${_img}`);
                photoContainer.style = `background-image: url(${e.target.result});
                                        background-size: cover;
                                        background-position: center;`;
            };
            file.readAsDataURL(this.files[0]);
        }
    }

    document.querySelector(`${_btnFile}`).addEventListener("change", readImage, false);
}