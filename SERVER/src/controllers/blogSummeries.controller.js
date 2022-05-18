const { Router } = require('express')
const BlogSummery = require('../models/blogSummaries.model')


const router = Router()

router.get('/', async (req, res)=>{
    try {
        const blogs = await BlogSummery.find().lean().exec()
        return res
        .status(200)
        .send(blogs)
    } catch (error) {
        return res
        .status(500)
    }
})



module.exports = router