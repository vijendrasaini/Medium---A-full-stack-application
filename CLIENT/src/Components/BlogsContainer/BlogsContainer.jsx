import { useEffect, useState } from 'react'
import { BlogCard } from '../Card/BlogCard'
import { baseURL } from '../../Resources/universalData'
import "./blogsContainer.css"


export const BlogsContainer = () => {

    const [ blogsArr, setBlogsArr] = useState([])
    useEffect(()=>{
        fetchBlogsSummeries()
    },[])
    async function fetchBlogsSummeries(){
        const path = '/blogs'
        try {
            const response = await fetch(`${baseURL}${path}`)
            const data = await response.json()
            setBlogsArr(data) 
        } catch (error) {
            console.log({message : error.message})   
        }
    }
    return (
        <div className='blogs-container'>
            <div>
                {
                    blogsArr?.map(blog => <BlogCard 
                        key={blog._id}
                        { ...blog}
                    />)
                }
            </div>
        </div>
    )
}