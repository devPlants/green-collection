import { initialHeaderS, loginHeaderS, homeHeaderS } from "./headersS.mjs";
import { loginMainS } from "./loginS.mjs";
import { homeInitialMainS } from "./homeInitialS.mjs";
import { homeMainS } from "./homeS.mjs";
import { updateUserMainS } from "./userUpdateS.mjs";
import { signupMainS } from "./signupS.mjs";
import { searchPlantsPageS, searchSeedsPageS, searchUsersPageS, searchLocationPageS } from "./searchPagesS.mjs";
import {} from '.'

const pagesHTML = {
    initialHeader: () => { return initialHeaderS() },
    loginHeader: () => { return loginHeaderS() },
    loginMain: () => { return loginMainS() },
    homeHeader: (dataUser) => { return homeHeaderS(dataUser) },
    homeInitialMain: () => { return homeInitialMainS() },
    homeMain: () => { return homeMainS() },
    updateUserMain: () => { return updateUserMainS() },
    signupMain: () => { return signupMainS() },
    searchPlantsPage: () => { return searchPlantsPageS() },
    searchSeedsPage: () => { return searchSeedsPageS() },
    searchUsersPage: () => { return searchUsersPageS() },
    searchLocationPage: () => { return searchLocationPageS() },
    
}

export { pagesHTML };