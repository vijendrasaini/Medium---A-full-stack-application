import { useEffect } from 'react'
import { BlogCard } from '../Card/BlogCard'
import "./blogsContainer.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../Redux/Blog/actioncreator'
import { TrendingTags } from '../TrendingTags/TrendingTags'


export const BlogsContainer = () => {


    const { blogs: { blogs, total, page }, searchKeyword } = useSelector(store => store.blog)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogs(searchKeyword, 0))
    }, [])

    return (
        <div className="blogs-page">
            <div className='blogs-container'>
                <div>
                    <div>
                        {searchKeyword != "" && <h1>Results for {searchKeyword} ...</h1>}
                        {
                            blogs?.length ?
                                blogs?.map(blog => <BlogCard
                                    key={blog._id}
                                    {...blog}
                                />)
                                :
                                <div className='blogs-container__no-results'>
                                    <img src="https://cdn.dribbble.com/users/746538/screenshots/7069080/no-results_4x.png" alt="" />
                                </div>
                        }
                    </div>
                    <div className='pagn-container'>
                        {
                            blogs?.length == 0 &&
                            <div>
                                <button disabled={page == 0} onClick={() => {
                                    dispatch(fetchBlogs(searchKeyword, page - 1))
                                }
                                }>{"<"}</button>
                                <button>{page + 1}</button>
                                <button disabled={page == total - 1} onClick={() => {
                                    dispatch(fetchBlogs(searchKeyword, page + 1))
                                }
                                }>{">"}</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='blogs-page__tags'>
                <TrendingTags />
            </div>
        </div>
    )
}