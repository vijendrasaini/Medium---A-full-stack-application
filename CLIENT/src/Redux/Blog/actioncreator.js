import { baseURL } from "../../Resources/universalData";
import { SETBLOGS, SETFULLBLOG, SETSEARCHKEYWORD, SETSEARCHTAG, SETTAGS } from "./action";



export const setTags = (payload)=>({ type : SETTAGS, payload})
export const setBlogs = (payload) => ({ type : SETBLOGS, payload})
export const setFullBlog = (payload) => ( { type : SETFULLBLOG, payload})
export const setSearchTag = (payload) => ( { type : SETSEARCHTAG, payload})
export const setSearchKeyword = (payload) => ( { type : SETSEARCHKEYWORD , payload})


export const fetchBlogs = (tag)=>async function fetchBlogsSummeries(dispatch){
    const path = '/blogs'
    try {
        dispatch(setSearchKeyword(tag))            
        const response = await fetch(`${baseURL}${path}/${tag}`)
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
        dispatch(setTags(data.tags))
    } catch (error) {
        console.log({ message : error.message})
    }
}