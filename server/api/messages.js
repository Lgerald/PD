const router = require('express').Router()
const { Message } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Message.findAlll()
        .then(messages => res.json(messages))
        .catch(next)
})
