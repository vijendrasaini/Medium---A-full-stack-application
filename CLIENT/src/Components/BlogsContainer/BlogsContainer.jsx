import { BlogCard } from '../Card/BlogCard'
import "./blogsContainer.css"


export const BlogsContainer = () => {


    return (
        <div className='blogs-container'>
            <div>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}