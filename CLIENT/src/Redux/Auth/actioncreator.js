import { baseURL } from "../../Resources/universalData";
import { AUTH_STATUS, LOGGED_USER } from "./action";



export const setAuthStatus = (payload)=>({ type : AUTH_STATUS, payload})
export const setLoggedUser = (payload) => ({ type : LOGGED_USER, payload})


