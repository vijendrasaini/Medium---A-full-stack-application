import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AdminPanel } from '../AdminPanel/AdminPanel'
import { BlogsContainer } from '../BlogsContainer/BlogsContainer'
import { BlogInDetail } from '../Card/BlogInDetail'
import { SearchBox } from '../SearchBox/SearchBox'
import { Loading } from '../Loading/Loading'

import "./routers.css"


export const AllRouters = ()=>{

    const { loading } = useSelector(store => store)
    return loading ? <Loading/> : 
    (
        <div>
            <AdminPanel/>
            <div className='routes'>
                <Routes>
                    <Route path='/' element={<BlogsContainer/>}/>
                    <Route path='/:username/:blogId' element={<BlogInDetail/>}/>
                </Routes>
                <SearchBox/>
            </div>
        </div>
    )
}


// import { Route, Routes } from 'react-router-dom'
// import { BlogInFullDetail } from '../../Pages/Blog/BlogInFullDetail'
// import { Blogs } from '../../Pages/Blogs/Blogs'



// export const AllRouters = ()=>{


//     return(
//         <Routes>
//             <Route path='/' element={<Blogs/>}/>
//             <Route path='/:username/:blogId' element={<BlogInFullDetail/>}/>
//         </Routes>
//     )
// }