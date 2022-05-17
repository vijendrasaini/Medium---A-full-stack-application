import { TagsContainer } from '../TagsContainer/TagsContainer'
import './trendingTags.css'

export const TrendingTags = () => {

    return (
        <div className="popular-tags">
            <h3>Topics matching {"bussiness"}</h3>
            <TagsContainer/>
        </div>
    )
}