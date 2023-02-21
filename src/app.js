const express = require('express')
const postsRouter = require('./posts/posts.router')
const db = require('./utils/database')

const app = express()

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('The database credentials are correct')
    })
    .catch((err) => {
        console.log(err)
    })


db.sync()
    .then(() => {
        console.log('The database has been updated')
    })
    .catch(err => {
        console.log(err)
    })


app.get('/', (req, res) => {
    res.json({
        message: 'Server Ok!',
        routes: {
            products: 'http://localhost:9000/api/v1/posts'
        }
    })
})


app.use('/api/v1', postsRouter)


app.listen(9000, () => {
    console.log('Server started at port 9000')
})


module.exports = app
