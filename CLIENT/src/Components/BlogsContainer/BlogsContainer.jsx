import { useEffect } from 'react'
import { BlogCard } from '../Card/BlogCard'
import "./blogsContainer.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../Redux/Blog/actioncreator'
import { TrendingTags } from '../TrendingTags/TrendingTags'


export const BlogsContainer = () => {

    
    const {blogs, searchKeyword } = useSelector(store=> store.blog)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchBlogs(searchKeyword))
    },[])
    
    return (
        <div className="blogs-page">
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
                        <div className='blogs-container__no-results'>
                            <img src="https://cdn.dribbble.com/users/746538/screenshots/7069080/no-results_4x.png" alt="" />
                        </div>
                    }
                </div>
            </div>
            <div className='blogs-page__tags'>
                <TrendingTags/>
            </div>
        </div>
    )
}