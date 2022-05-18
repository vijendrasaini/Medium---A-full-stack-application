const { Router } = require('express')
const Blog = require('../models/blog.model')
const BlogSummery = require('../models/blogSummaries.model')


const router = Router()

router.post('/', async (req, res) => {
    try {

        const { userId, blog, htmlContent, tags } = req.body
        const blogSummary = await BlogSummery.create({
            userId,
            blog
        })
        const blogHtml = await Blog.create({
            blogId : blogSummary._id,
            htmlContent,
            tags
        })

        return res
            .status(200)
            .send({status : "success"})
    } catch (error) {
        console.log({message : error.message})
        return res
            .status(500)
            .send({ status : "failure"})
    }
})

router.get('/:blogId', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.blogId).lean().exec()

        return res
            .status(200)
            .send(blog)
    } catch (error) {
        return res
            .status(500)
    }
})



module.exports = router