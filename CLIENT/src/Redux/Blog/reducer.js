import { SETBLOGS } from "./action";


const initState = {
    blogs : []
};
export const reducer = (state = initState, { type, payload} ) =>{
    switch (type) {
        case SETBLOGS:
            return { ...state, blogs : payload};
    
        default:
            return state
    }
}