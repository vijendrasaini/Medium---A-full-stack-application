import { SearchBox } from "../SearchBox/SearchBox"
import { TrendingTags } from "../TrendingTags/TrendingTags"
import "./searchAndTags.css"

export const SearchAndTags = ()=>{


    return(
        <div>
            <div className="search-and-tags">
                <SearchBox/>
                <TrendingTags/>
            </div>
        </div>
    )
}