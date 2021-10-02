const routes = require('express').Router()

routes.post('/new-post', (req, res) => {
    res.send(req.body)  
})

module.exports = routes