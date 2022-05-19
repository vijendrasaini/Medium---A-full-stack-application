import { IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import './searchBox.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Redux/Blog/actioncreator";


export const SearchBox = () => {

    const [searchText, setSearchText] = useState("")
    const { searchKeyword } = useSelector(store => store)
    const dispatch = useDispatch()
    return (
        <>
            <div
                className="search-box"
            >
                <IconButton size="large" sx={{ ml: 2 }}>
                    <SearchIcon />
                </IconButton>
                <input
                    type="text"
                    value = {searchText == "" ? searchKeyword : searchText}
                    onChange = { (e) => setSearchText(e.target.value) }
                    placeholder="Search by tags"
                />
                <button
                    className="search-btn"
                    onClick = { () => dispatch(fetchBlogs(searchText)) }
                >
                    Search
                </button>
            </div>
        </>
    )
}