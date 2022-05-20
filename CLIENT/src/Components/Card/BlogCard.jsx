import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { timeSince } from '../../Resources/universalData'
import './blogcard.css'

export const BlogCard = ({ blog, _id, user, createdAt }) => {
    return (
        <div className="blog-overview">
            <div className='blog-overview__user-and-time'>
                <Avatar sx={{ height: 30, width: 30 }} src={user?.avatar} alt={user?.name} />
                <div>
                    <span>{user?.name}</span>
                    <span> . {timeSince(new Date(createdAt).getTime(), createdAt)}</span>
                    <span> . {"2 min read"}</span>
                </div>
            </div>
            <Link to={`/user/${_id}`}
            style={{ textDecoration : "none", color : 'black'}}
            >
                <div className="blog-overview__blog-tbi">
                    <div>
                        <div>
                            <h2>{ blog?.title }</h2>
                            <p>{blog?.body + " ..."}</p>
                        </div>
                        {/* <div>
                            <div className='blog-overview__tags'>
                                <small>{"Self Improvement"}</small>
                                <div>
                                    <small>{"2 min read"}</small>
                                    <small>  .  {"Selected for you"}</small>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <img src="https://miro.medium.com/fit/c/140/140/0*PjkE1iOltIbO7wgO" alt="blog-image" />
                    </div>
                </div>
            </Link>
        </div>
    )
}