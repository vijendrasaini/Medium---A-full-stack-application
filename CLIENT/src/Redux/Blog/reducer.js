import { SETBLOGS, SETTAGS } from "./action";


const initState = {
    blogs : [],
    tags : []
};
export const reducer = (state = initState, { type, payload} ) =>{
    switch (type) {
        case SETBLOGS:
            return { ...state, blogs : payload};
        case SETTAGS:
            return { ...state, tags : payload };
        default:
            return state
    }
}