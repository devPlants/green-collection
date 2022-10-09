export function loginHeaderHTML() {
    return `<img src="./assets/imgs/name-green-collection.png" alt="" height="45vh">`;
}

export function homeHeaderHTML(_name, _email, _photo) {

    return `<div class="logo-container">
                <img src="./assets/imgs/logo.png" height="48px" width="48px" alt="logo">
            </div>

            <div class="searchbar-container">
                <input type="text" id="searchbar">
                <span class="material-symbols-outlined" id="search-btn">search</span>
            </div>

            <div id="div-login">
            <div class="profile-container" onclick="activeDropdown()">

                <div style='width: 36px; height: 36px; background-size: cover; background-image: url("http://localhost:8000/files/${_photo}"); border-radius: 50%;'></div>

                <div class="login-container">
                    <span>${_name}</span>
                    <span>${_email}</span>
                </div>

            </div>

            <div class="menu-user-header">
                <nav>
                    <ul>
                        <li onclick = "pageExchanges('pending')">Notificações</li>
                        <li onclick = 'pageUpdate()'>Editar perfil</li>
                        <li onclick= 'loginPage()'>Sair</li>
                    </ul>
                </nav>
            </div>
        </div>`;

}