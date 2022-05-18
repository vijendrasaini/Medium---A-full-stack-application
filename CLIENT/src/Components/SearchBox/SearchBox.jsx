import { IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import './searchBox.css'
import { useRef, useState } from "react";


export const SearchBox = () => {

    const [searchText, setSearchText] = useState("")
    const searchByTag = async ()=>{
        try {
            const response = await fetch()
            const data = await fetch()
        } catch (error) {
            
        }
    }
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
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search by tags"
                />
                <button
                    className="search-btn"
                    onClick={ searchByTag }
                >
                    Search
                </button>
            </div>
        </>
    )
}