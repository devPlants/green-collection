export function initialHeaderHTML() {
    return `<div class="logo-container" onclick='renderPage.login()' style="cursor:pointer;">
                <img src="./assets/imgs/logo.png" height="48px" width="48px" alt="logo">
            </div>

            <div class="logo-container" onclick='renderPage.login()' style="cursor:pointer;">
                <img src="./assets/imgs/name-green-collection.png" alt="" height="45vh">
            </div>

            <div class="profile-container" onclick="renderPage.login()">
                <img src="./assets/imgs/User.png" height='36px' width='36px' alt="">
                <div class="login-container">
                    <span>Login</span>
                    <span>seuemail@email.com</span>
                </div>
            </div>`;
}

export function loginHeaderHTML() {
    return `<img onclick='renderPage.homeInitial()' src="./assets/imgs/name-green-collection.png" alt="" height="45vh" style='cursor:pointer;'>`;
}

export function homeHeaderHTML(_name, _email, _photo) {
    return `<div class="logo-container" onclick='renderPage.home()' style='cursor:pointer;'>
                <img src="./assets/imgs/logo.png" height="48px" width="48px" alt="logo">
            </div>
                
            <div class="searchbar-container" onclick="renderPage.closeDropDown()">
                <input type="text" id="searchbar">
                <span class="material-symbols-outlined" id="search-btn" onclick='renderPage.searchBtn()'>search</span>
            </div>

            <div id="div-login">
                <div class="profile-container" onclick="renderPage.activeDropdown()">

                    <div style='width: 36px; height: 36px; background-size: cover; background-image: url("/files/${_photo}"); border-radius: 50%;'></div>

                    <div class="login-container">
                        <span>${_name}</span>
                        <span>${_email}</span>
                    </div>

                </div>

                <div class="menu-user-header">
                    <nav>
                        <ul>
                            <li onclick = "renderPage.exchanges('pending')">Minhas trocas</li>
                            <li onclick = 'renderPage.updateUserMain()'>Editar perfil</li>
                            <li onclick= 'renderPage.login()'>Sair</li>
                        </ul>
                    </nav>
                </div>
            </div>`;
}

export function homeHeaderAdminHTML(_name, _email, _photo) {
    return `<div class="logo-container" onclick='renderPage.home()' style='cursor:pointer;'>
                    <img src="./assets/imgs/logo.png" height="48px" width="48px" alt="logo">
                </div>
                
                <div class="searchbar-container" onclick="renderPage.closeDropDown()">
                    <input type="text" id="searchbar">
                    <span class="material-symbols-outlined" id="search-btn" onclick='renderPage.searchBtn()'>search</span>
                </div>

                <div id="div-login">
                <div class="profile-container" onclick="renderPage.activeDropdown()">

                    <div style='width: 36px; height: 36px; background-size: cover; background-image: url("/files/${_photo}"); border-radius: 50%;'></div>

                    <div class="login-container">
                        <span>${_name}</span>
                        <span>${_email}</span>
                    </div>

                </div>

                <div class="menu-user-header">
                    <nav>
                        <ul>
                            <li onclick = "renderPage.admin()">Aprovações</li>
                            <li onclick = "renderPage.exchanges('pending')">Minhas trocas</li>
                            <li onclick = 'renderPage.updateUserMain()'>Editar perfil</li>
                            <li onclick= 'renderPage.login()'>Sair</li>
                        </ul>
                    </nav>
                </div>
                
            </div>`;
}