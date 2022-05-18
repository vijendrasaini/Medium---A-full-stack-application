import { baseURL } from "../../Resources/universalData";
import { SETBLOGS } from "./action";



export const setBlogs = (payload) => ({ type : SETBLOGS, payload})
export const fetchBlogs = ()=>async function fetchBlogsSummeries(dispatch){
    const path = '/blogs'
    try {
        const response = await fetch(`${baseURL}${path}`)
        const data = await response.json()
        dispatch(setBlogs(data))
    } catch (error) {
        console.log({message : error.message})   
    }
}