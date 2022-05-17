import { Route, Routes } from 'react-router-dom'
import { BlogInFullDetail } from '../../Pages/Blog/BlogInFullDetail'
import { Blogs } from '../../Pages/Blogs/Blogs'



export const AllRouters = ()=>{


    return(
        <Routes>
            <Route path='/' element={<Blogs/>}/>
            <Route path='/:username/:blogId' element={<BlogInFullDetail/>}/>
        </Routes>
    )
}