let typeSearch = "plant";

export const searchBtn = () => {
    const iptSearch = document.querySelector("#searchbar");

    switch (typeSearch) {
        case "plant":
            window.renderPage.searchPlantsPage(1, iptSearch.value);
            break;
        case "seed":
            window.renderPage.searchSeedsPage(1, iptSearch.value);
            break;
        case "users":
            window.renderPage.searchUsersPage(1, iptSearch.value);
            break;
        case "local":
            window.renderPage.searchLocationPage(1, iptSearch.value);
            break;
    }
};

export const typesSearch = (type) => {
    typeSearch = type;
    return true;
};
