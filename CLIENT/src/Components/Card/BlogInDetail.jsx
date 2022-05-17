import { IconButton } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IosShareIcon from '@mui/icons-material/IosShare';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './blogInDetail.css'
import { useState } from "react";

export const BlogInDetail = () => {

    
    const [blog, setBlog] = useState({})

    // const sendData = async ( )=>{
    //     const url = 'http://localhost:7000/blogs/5'
    //     try {
    //         const secArg = {
    //             method : "PATCH",
    //             body : JSON.stringify({ 
    //                 blogId: 1,
    //                 htmlContent: data,
    //                 tags: [
    //                     "Billionaires",
    //                     "Billionairelifesyle",
    //                     "Billionaire Insights",
    //                     "Billionairewisdom",
    //                     "Billionaire Lifestyle",
    //                     "Billionaire Romance"
    //                   ],
    //                 createdAt: ""
    //              }),
    //              headers : {
    //                 "content-type" : "application/json"
    //              }
    //         }
    //         const response = await fetch(url)
    //         const b = await response.json()
    //         console.log({ responseB : b})
    //         setCode(b.htmlContent)

    //     } catch (error) {
    //         console.log({message : error.message})   
    //     }
    // }
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
                <div className="blog-content__HTML-Content" dangerouslySetInnerHTML={{__html : data}}>
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