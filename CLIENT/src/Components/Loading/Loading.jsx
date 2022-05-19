import { CircularProgress } from "@mui/material"
import "./loading.css"


export const Loading = ()=>{


    return (
        <div className="loading"
        >
            <div className="loading__image">
                <h1>Loading...</h1>
                <CircularProgress/>
            </div>
        </div>
    )
}