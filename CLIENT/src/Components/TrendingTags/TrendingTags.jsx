import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBlogs } from '../../Redux/Blog/actioncreator'
import './trendingTags.css'

export const TrendingTags = () => {

    const { tags } = useSelector(store=> store)
    const dispatch = useDispatch()

    return (
        <div className="popular-tags">
            <h3>Topics matching {"bussiness"}</h3>
            <div className='tags-container'>
                { tags.map((tag, index) => <div key={index}><span onClick={ ()=> dispatch(fetchBlogs(tag)) } >{tag}</span></div>)}
            </div>
        </div>
    )
}