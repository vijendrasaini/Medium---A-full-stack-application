const { Router } = require('express')
const BlogSummery = require('../models/blogSummaries.model')
const Blog = require('../models/blog.model')


const router = Router()

router.get('/:tag', async (req, res)=>{
    try {
        let keyword = req.params.tag

        let blogs = await Blog.aggregate([
            {
                $project : {
                    _id : 0,
                    createdAt : 0,
                    updatedAt : 0,
                    htmlContent : 0
                }
            },
            {
                $unwind : "$tags"
            },
            {
                $match : {
                    tags : {$regex :new RegExp(keyword, "i")}
                }
            },
            { 
                $group : {
                    _id : "$blogId"
                }
            },
            {
                $lookup : {
                    from : "blogsummaries",
                    localField : "_id",
                    foreignField : "_id",
                    as : "blogsOverview"
                }
            },
            {
                $lookup : {
                    from : "users",
                    localField : "blogsOverview.userId",
                    foreignField : "_id",
                    as : "user"
                }
            },
        ])
        blogs = blogs.map(el =>{
            // console.log(el)
            return ({
                _id : el._id,
                blog : el.blogsOverview[0].blog,
                user : el.user[0],
                createdAt : el.blogsOverview[0].createdAt
            })
        })
        return res
        .status(200)
        .send(blogs)
    } catch (error) {
        console.log({ message : error.message})
        return res
        .status(500)
    }
})



module.exports = router