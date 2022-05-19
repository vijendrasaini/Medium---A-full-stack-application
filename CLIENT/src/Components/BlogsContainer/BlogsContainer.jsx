import { useEffect } from 'react'
import { BlogCard } from '../Card/BlogCard'
import "./blogsContainer.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../Redux/Blog/actioncreator'


export const BlogsContainer = () => {

    
    const {blogs, searchKeyword } = useSelector(store=> store)
    const dispatch = useDispatch()
    console.log({searchKeyword})
    useEffect(()=>{
        dispatch(fetchBlogs(searchKeyword))
    },[])
    
    return (
        <div className='blogs-container'>
            <div>
                { searchKeyword != "" && <h1>Results for { searchKeyword } ...</h1>}
                {   
                    blogs.length ? 
                    blogs?.map(blog => <BlogCard 
                        key={blog._id}
                        { ...blog}
                    />)
                    :
                    <div>
                        <img style={{
                            width : "100%",
                            height : "400px"
                        }} src="https://cdn.dribbble.com/users/746538/screenshots/7069080/no-results_4x.png" alt="" />
                    </div>
                }
            </div>
        </div>
    )
}