import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../Redux/Blog/actioncreator'
import './pagn.css'


export const NextandPrebtnBox = () => {

    const dispatch = useDispatch()
    const { page,totalDocs } = useSelector(store => store.blog)

    return (
        
        <div className='pagn-container'>
        <div>
            <button disabled={page == 1} onClick={()=>{
                console.log("HI")
                dispatch(setPage(page - 1))
                // dispatch(fetchBlogs(searchKeyword, page -1))

            }
            }>{"<"}</button>
            <button>{page + 1}</button>
            <button disabled={page == total} onClick={()=>{
                console.log("HIli")
                dispatch(fetchBlogs(searchKeyword, page + 1))
            }
            }>{">"}</button>
        </div>
    </div>
    )
}