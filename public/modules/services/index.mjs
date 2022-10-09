import { loginHeaderS, homeHeaderS } from "./headersS.mjs";
import { loginMainS } from "./loginS.mjs";
import { homeMainS } from "./homeS.mjs";
import { updateUserMainS } from "./userUpdateS.mjs";
import { signupMainS } from "./signupS.mjs";

const pagesHTML = {
    loginHeader: () => { return loginHeaderS() },
    loginMain: () => { return loginMainS() },
    homeHeader: (dataUser) => { return homeHeaderS(dataUser) },
    homeMain: () => { return homeMainS() },
    updateUserMain: () => { return updateUserMainS() },
    signupMain: () => { return signupMainS() },
}

export { pagesHTML };