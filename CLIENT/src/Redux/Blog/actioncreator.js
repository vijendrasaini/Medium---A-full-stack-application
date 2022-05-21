import { baseURL } from "../../Resources/universalData";
import { LOADING, PAGE, SETBLOGS, SETFULLBLOG, SETSEARCHKEYWORD, SETSEARCHTAG, SETTAGS, TOTAL_DOCS } from "./action";



export const setTags = (payload)=>({ type : SETTAGS, payload})
export const setBlogs = (payload) => ({ type : SETBLOGS, payload})
export const setFullBlog = (payload) => ( { type : SETFULLBLOG, payload})
export const setSearchTag = (payload) => ( { type : SETSEARCHTAG, payload})
export const setSearchKeyword = (payload) => ( { type : SETSEARCHKEYWORD , payload})
export const setLoading = (payload) => ( { type : LOADING, payload})
export const setPage = (payload) => ({ type : PAGE, payload})
export const setTotalDocs = (payload) => ({ type : TOTAL_DOCS, payload})

export const fetchBlogs = (tag, page)=>async function fetchBlogsSummeries(dispatch){
    const path = '/blogs'
    try {
        dispatch(setSearchKeyword(tag))        
        const response = await fetch(`${baseURL}${path}?page=${page}&q=${tag == "" ? "billion" : tag}`)
        dispatch(setLoading(true))
        const data = await response.json()
        dispatch(setBlogs(data))
        dispatch(setLoading(false))
    } catch (error) {
        console.log({message : error.message})   
    }
}


export const fetchFullBlog = (blogId)=>async function fetchBlogById(dispatch){
    const path = '/blog'
    try {
        dispatch(setLoading(true))
        const response = await fetch(`${baseURL}${path}/${blogId}`)
        const data = await response.json()
        dispatch(setFullBlog(data))
        dispatch(setLoading(false))
        dispatch(setTags(data.tags))
    } catch (error) {
        console.log({ message : error.message})
    }
}