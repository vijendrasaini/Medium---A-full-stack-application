import { SETBLOGS, SETFULLBLOG, SETSEARCHKEYWORD, SETTAGS, PAGE} from "./action";


const initState = {
    blogs : [],
    blog : {},
    tags : [],
    searchKeyword : "",
    loading : false,
    page : 1
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

        case PAGE:
            return { ...state, page : payload}

        default:
            return state
    }
}