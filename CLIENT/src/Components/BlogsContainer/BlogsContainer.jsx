import { useEffect } from 'react'
import { BlogCard } from '../Card/BlogCard'
import "./blogsContainer.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../Redux/Blog/actioncreator'


export const BlogsContainer = () => {

    
    const {blogs } = useSelector(store=> store)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchBlogs())
    },[])
    
    return (
        <div className='blogs-container'>
            <div>
                {
                    blogs?.map(blog => <BlogCard 
                        key={blog._id}
                        { ...blog}
                    />)
                }
            </div>
        </div>
    )
}