import {
    initialHeaderS,
    loginHeaderS,
    homeHeaderS,
    homeHeaderAdminS,
} from "./headersS.mjs";
import { loginMainS } from "./loginS.mjs";
import { homeInitialMainS } from "./homeInitialS.mjs";
import { homeMainS } from "./homeS.mjs";
import { updateUserMainS } from "./userUpdateS.mjs";
import { signupMainS } from "./signupS.mjs";
import {
    searchPlantsPageS,
    searchSeedsPageS,
    searchUsersPageS,
    searchLocationPageS,
} from "./searchPagesS.mjs";
import { adminS } from "./adminS.mjs";
import { tradeS } from "./tradeS.mjs";

const pagesHTML = {
    initialHeader: () => {
        return initialHeaderS();
    },
    loginHeader: () => {
        return loginHeaderS();
    },
    loginMain: () => {
        return loginMainS();
    },
    homeHeader: (dataUser) => {
        return homeHeaderS(dataUser);
    },
    homeHeaderAdmin: (dataUser) => {
        return homeHeaderAdminS(dataUser);
    },
    homeInitialMain: () => {
        return homeInitialMainS();
    },
    homeMain: () => {
        return homeMainS();
    },
    updateUserMain: async (dataUser) => {
        return await updateUserMainS(dataUser);
    },
    signupMain: () => {
        return signupMainS();
    },
    searchPlantsPage: async (page, word) => {
        return await searchPlantsPageS(page, word);
    },
    searchSeedsPage: async (page, word) => {
        return await searchSeedsPageS(page, word);
    },
    searchUsersPage: async (page, word) => {
        return await searchUsersPageS(page, word);
    },
    searchLocationPage: async (page, word) => {
        return await searchLocationPageS(page, word);
    },
    adminPage: async () => {
        return await adminS();
    },
    tradePage: async (productId) => {
        return await tradeS(productId);
    },
};

export { pagesHTML };
