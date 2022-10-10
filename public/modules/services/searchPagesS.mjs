import {
    searchPlantsPageHTML,
    searchSeedsPageHTML,
    searchUsersPageHTML,
    searchLocationPageHTML,
} from "../pages/searchPagesP.mjs";

export async function searchPlantsPageS(page, word) {
    return await searchPlantsPageHTML(page, word);
}

export async function searchSeedsPageS(page, word) {
    return await searchSeedsPageHTML(page, word);
}

export async function searchUsersPageS(page, word) {
    return await searchUsersPageHTML(page, word);
}

export async function searchLocationPageS(page, word) {
    return await searchLocationPageHTML(page, word);
}
