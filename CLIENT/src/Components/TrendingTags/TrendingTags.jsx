import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../Redux/Blog/actioncreator'
import './trendingTags.css'

export const TrendingTags = () => {

    const { tags, searchKeyword } = useSelector(store=> store.blog)
    const dispatch = useDispatch()
    const defaultTags = ["billion", "character", "mindset", "self-help"]
    return (
        <div className="popular-tags">
            <h3>
            { searchKeyword == "" ? "You might Like"  :  `Topics matching with ${searchKeyword}`}
            </h3>
            <div className='tags-container'>
                { (searchKeyword == "" ? defaultTags :  tags).map((tag, index) => <div key={index}><span onClick={ ()=> dispatch(fetchBlogs(tag)) } >{tag}</span></div>)}
            </div>
        </div>
    )
}