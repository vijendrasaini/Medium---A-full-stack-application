import { configureStore } from '@reduxjs/toolkit'
import { reducer as blogReducer } from './Blog/reducer'
import { reducer as authReducer } from './Auth/reducer'

const thunk = (store)=>(next)=>(action)=>{
    if(typeof action == "function")
        action(store.dispatch)
    else
        next(action)
}

const rootReducer = {
    blog : blogReducer,
    auth : authReducer
}
export const store = configureStore({
    reducer : rootReducer,
    middleware : [thunk]
})