import { IconButton } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IosShareIcon from '@mui/icons-material/IosShare';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './blogInDetail.css'
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../Resources/universalData";

export const BlogInDetail = () => {

    const { blogId } = useParams()
    const [ blog, setBlog] = useState({})
    useEffect(()=>{
        fetchBlogById()
    },[])
    async function fetchBlogById(){
        const path = '/blog'
        try {
            const response = await fetch(`${baseURL}${path}/${blogId}`)
            const data = await response.json()
            console.log(data)
            setBlog(data)
        } catch (error) {
            console.log({ message : error.message})
        }
    }
    return (
        <div className="blogs-container">
            <div className="blog-content">
                <div className="blog-content__header">
                    <div>
                        <div className="blog-content__user-image">
                            <img src="https://miro.medium.com/fit/c/60/60/0*c-sebS2TCXzg_7rS" alt="" />
                        </div>
                        <div>
                            <div>
                                <span className="blog-content__user-name">Benjamin Hardy, PhD</span>
                                <button className="blog-content__follow-btn">Follow</button>
                            </div>
                            <div>
                                <span>Dec 2, 2021</span>
                                <span> . 8 min read</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <IconButton>
                            <BookmarkBorderIcon />
                        </IconButton>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="blog-content__HTML-Content" dangerouslySetInnerHTML={{__html : blog?.htmlContent}}>
                </div>
                <div className="blog-content__footer">
                    <div>
                        <IconButton>
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                        <span>Responses</span>
                    </div>
                    <div>
                        <IconButton>
                            <IosShareIcon />
                        </IconButton>
                        <IconButton>
                            <BookmarkBorderIcon />
                        </IconButton>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}