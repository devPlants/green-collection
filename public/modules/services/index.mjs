import { loginHeaderS, homeHeaderS } from "./headersS.mjs";
import { loginMainS } from "./loginS.mjs";
import { homeMainS } from "./homeS.mjs";

const pagesHTML = {
    loginHeader: () => { return loginHeaderS() },
    loginMain: () => { return loginMainS() },
    homeHeader: (dataUser) => { return homeHeaderS(dataUser) },
    homeMain: (token) => { return homeMainS(token) },
}

export { pagesHTML };