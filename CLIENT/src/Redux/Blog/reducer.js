import { SETBLOGS, SETFULLBLOG, SETSEARCHKEYWORD, SETTAGS} from "./action";


const initState = {
    blogs : [],
    blog : {},
    tags : [],
    searchKeyword : "",
    loading : false
};
export const reducer = (state = initState, { type, payload} ) =>{
    switch (type) {
        case SETBLOGS:
            return { ...state, blogs : payload};

        case SETFULLBLOG:
            return { ...state, blog : payload };

        case SETTAGS:
            return { ...state, tags : payload };

        case SETSEARCHKEYWORD:
            return { ...state, searchKeyword : payload };

        default:
            return state
    }
}