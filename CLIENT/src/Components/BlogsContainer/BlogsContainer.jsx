import { useEffect, useState } from 'react'
import { BlogCard } from '../Card/BlogCard'
import "./blogsContainer.css"


export const BlogsContainer = () => {

    const [ blogsArr, setBlogsArr] = useState([])
    useEffect(()=>{
        sendData()
    },[])
    async function sendData(){
        const url = 'http://localhost:7000/blogSummaries'
        try {
            const response = await fetch(url)
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
                        key={blog.id}
                        { ...blog}
                    />)
                }
                {/* <BlogCard />
                <BlogCard />
                
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard /> */}
            </div>
        </div>
    )
}