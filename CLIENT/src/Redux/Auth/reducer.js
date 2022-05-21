import { AUTH_STATUS, LOGGED_USER, OPEN_SIGNIN_POPUP, SING_IN_ALERT} from "./action";


const initState = {
    authStatus : localStorage.getItem('user') ? true : false,
    loggedUser : JSON.parse(localStorage.getItem('user')) || null,
    signInAlert : true,
    signInPopUp : false
};
export const reducer = (state = initState, { type, payload} ) =>{
    switch (type) {
        case AUTH_STATUS:
            return { ...state, authStatus : payload}

        case LOGGED_USER:
            return { ...state, loggedUser : payload}

        case SING_IN_ALERT:
            return { ...state, signInAlert : false}

        case OPEN_SIGNIN_POPUP:
            return { ...state, signInPopUp : payload}

        default:
            return state
    }
}