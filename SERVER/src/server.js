const express = require('express')

const mongoConnect = require('./configs/db')

const app = express()
const port = process.env.PORT || 7000

app.use(express.json())


module.exports = () => {
    try {
        app.listen(7000, async ()=>{
            await mongoConnect()
            console.log(`Server is listening on the port ${port}`)
        })
    } catch (error) {
        console.log({ message : error.message})
    }
}
