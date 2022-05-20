import { AUTH_STATUS, LOGGED_USER} from "./action";


const initState = {
    authStatus : false,
    loggedUser : JSON.parse(localStorage.getItem('user')) || null
};
export const reducer = (state = initState, { type, payload} ) =>{
    switch (type) {
        case AUTH_STATUS:
            return { ...state, authStatus : payload}

        case LOGGED_USER:
            return { ...state, loggedUser : payload}

        default:
            return state
    }
}