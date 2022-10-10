export const searchBtn = () => {
    const iptSearch = document.querySelector("#searchbar");
    //alert(iptSearch.value);
    window.plantsSearchMain(1, iptSearch.value);
};
