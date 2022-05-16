import { IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import './searchBox.css'
import { useRef, useState } from "react";

export const SearchBox = () => {

    const [searchText,setSearchText] = useState("")
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
                    placeholder="Search by tags" />
            </div>
        </>
    )
}