import { baseURL } from "../../Resources/universalData";
import { SETBLOGS, SETFULLBLOG, SETTAGS } from "./action";



export const setTags = (payload)=>({ type : SETTAGS, payload})
export const setBlogs = (payload) => ({ type : SETBLOGS, payload})
export const setFullBlog = (payload) => ( { type : SETFULLBLOG, payload})


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

export const fetchFullBlog = (blogId)=>async function fetchBlogById(dispatch){
    const path = '/blog'
    try {
        const response = await fetch(`${baseURL}${path}/${blogId}`)
        const data = await response.json()
        dispatch(setFullBlog(data))
    } catch (error) {
        console.log({ message : error.message})
    }
}