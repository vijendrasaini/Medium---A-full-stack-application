import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import './blogcard.css'

export const BlogCard = ({ blog, id }) => {

    return (
        <div className="blog-overview">
            <div className='blog-overview__user-and-time'>
                <Avatar sx={{ height: 30, width: 30 }} src='https://miro.medium.com/fit/c/60/60/0*c-sebS2TCXzg_7rS' alt='blog-user' />
                <div>
                    <span>{"Vjiendra Saini"}</span>
                    <span> . {"5 days ago"}</span>
                </div>
            </div>
            <Link to={`${"username"}/${id}`}
            style={{ textDecoration : "none", color : 'black'}}
            >
                <div className="blog-overview__blog-tbi">
                    <div>
                        <div>
                            <h2>{ blog?.title || "7 daily habits to increase your self-confidence"}</h2>
                            <p>{(blog?.body || "1. The Mayo Clinic Guide to Stress-Free Living. by Amit Sood. This book is based on the stress management program that Dr. Sood, a physician specialized in integrative medicine, has offered at Mayo Clinic and is a")  + " ..."}</p>
                        </div>
                        <div>
                            <div className='blog-overview__tags'>
                                <small>{"Self Improvement"}</small>
                                <div>
                                    <small>{"2 min read"}</small>
                                    <small>  .  {"Selected for you"}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://miro.medium.com/fit/c/140/140/0*PjkE1iOltIbO7wgO" alt="blog-image" />
                    </div>
                </div>
            </Link>
        </div>
    )
}