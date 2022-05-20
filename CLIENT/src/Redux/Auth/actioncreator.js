import { baseURL } from "../../Resources/universalData";
import { AUTH_STATUS, LOGGED_USER, OPEN_SIGNIN_POPUP, SING_IN_ALERT } from "./action";



export const setAuthStatus = (payload)=>({ type : AUTH_STATUS, payload})
export const setLoggedUser = (payload) => ({ type : LOGGED_USER, payload})
export const openSignInPopup = (payload) => ({ type : OPEN_SIGNIN_POPUP, payload})
export const setSignInAlert = () => ({ type : SING_IN_ALERT})


