import { Avatar } from '@mui/material'
import './blogcard.css'

export const BlogCard = () => {


    return (
        <div className="blog-overview">
            <div className='blog-overview__user-and-time'>
                <Avatar sx={{ height: 30, width: 30 }} src='https://miro.medium.com/fit/c/60/60/0*c-sebS2TCXzg_7rS' alt='blog-user' />
                <div>
                    <span>{"Vjiendra Saini"}</span>
                    <span> . {"5 days ago"}</span>
                </div>
            </div>
            <div className="blog-overview__blog-tbi">
                <div>
                    <div>
                        <h2>7 daily habits to increase your self-confidence</h2>
                        <p>1. Meditation Meditation helps you: Get rid of stress Focus on the present Increase self-awareness Let go of negative thoughts “Meditation is hanging out with your soul.” Aim for 10–15 minutes/day to improve your self-</p>
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
        </div>
    )
}