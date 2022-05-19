import { IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import './searchBox.css'
import { useState } from "react";
import { useDispatch} from "react-redux";
import { fetchBlogs } from "../../Redux/Blog/actioncreator";
import { useNavigate } from "react-router-dom";


export const SearchBox = () => {

    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div >
            <div
                className="search-box"
            >
                <IconButton size="large" sx={{ ml: 2 }}>
                    <SearchIcon />
                </IconButton>
                <input
                    type="text"
                    value = {searchText}
                    onChange = { (e) => setSearchText(e.target.value) }
                    placeholder="Search by tags"
                />
                <button
                    className="search-btn"
                    disabled={searchText == "" }
                    onClick = { () => {
                        dispatch(fetchBlogs(searchText))
                        navigate("/")
                    } }
                >
                    Search
                </button>
            </div>
        </div>
    )
}