import { SETBLOGS, SETFULLBLOG, SETTAGS } from "./action";


const initState = {
    blogs : [],
    blog : {},
    tags : []
};
export const reducer = (state = initState, { type, payload} ) =>{
    switch (type) {
        case SETBLOGS:
            return { ...state, blogs : payload};

        case SETFULLBLOG:
            return { ...state, blog : payload };

        case SETTAGS:
            return { ...state, tags : payload };

        default:
            return state
    }
}