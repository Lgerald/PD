const router = require('express').Router()
const { Message } = require('../db/models')
module.exports = router

//GET: all messages
router.get('/', (req, res, next) => {
    Message.findAlll()
        .then(messages => res.json(messages))
        .catch(next)
})

//a message

//POST: a message

//UPDATE: all messages

//a message

//DELETE: all messages

//messages

//a message
