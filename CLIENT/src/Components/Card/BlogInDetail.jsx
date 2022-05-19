import { IconButton } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IosShareIcon from '@mui/icons-material/IosShare';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './blogInDetail.css'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFullBlog } from "../../Redux/Blog/actioncreator";
import { timeSince } from "../../Resources/universalData";

export const BlogInDetail = () => {

    const { blogId } = useParams()
    const dispatch = useDispatch()
    const { blog } = useSelector(store => store)
    useEffect(() => {
        dispatch(fetchFullBlog(blogId))
    }, [])

    return (
        <>
            <div className="blog-container">
                <div className="blog-content">
                    <div className="blog-content__header">
                        <div>
                            <div className="blog-content__user-image">
                                <img src={blog?.user?.avatar} alt={blog?.user?.name} />
                            </div>
                            <div>
                                <div>
                                    <span className="blog-content__user-name">{blog?.user?.name}</span>
                                    <button className="blog-content__follow-btn">Follow</button>
                                </div>
                                <div>
                                    <span>{timeSince(new Date(blog?.createdAt).getTime(), blog?.createdAt)}</span>
                                    <span> . {Math.ceil(blog?.htmlContent?.length/(200 * 10))} min read</span>
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
                    <div className="blog-content__HTML-Content" dangerouslySetInnerHTML={{ __html: blog?.htmlContent }}>
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
            <div className="user-card">
                <img src={blog?.user?.avatar} alt={blog?.user?.name} />
                <h3>{blog?.user?.name}</h3>
            </div>
        </>
    );
}