const { Router } = require('express')
const BlogSummery = require('../models/blogSummaries.model')


const router = Router()

router.get('/blogs', async (req, res)=>{
    try {
        const blogs = await BlogSummery.aggregate()
        return res
        .status(200)
        .send(blogs)
    } catch (error) {
        return res
        .status(500)
    }
})



module.exports = router