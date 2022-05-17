import { AdminPanel } from "../../Components/AdminPanel/AdminPanel"
import { BlogInDetail } from "../../Components/Card/BlogInDetail"
import { SearchAndTags } from "../../Components/SearchAndTags/SearchAndTags"
import "./blog.css"



export const BlogInFullDetail = ()=>{


    return(
        <div className="blogs-page">
            <AdminPanel/>
            <BlogInDetail/>
            <SearchAndTags/>
        </div>
    )
}