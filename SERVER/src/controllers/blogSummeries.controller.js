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
                $project : {
                    "blog" : "$blogsOverview.blog",
                    "_id" : "$blogsOverview._id"
                }
            }
        ])
        blogs = blogs.map(el =>{
            return ({
                _id : el._id[0],
                blog : el.blog[0]
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