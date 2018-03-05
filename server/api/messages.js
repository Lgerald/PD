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
router.get('/:messageId', (req, res, next) => {
    Message.findById(req.params.messageId)
    .then(message => res.json(message))
    .catch(next)
})

//messages sent by a specific user


//messages sent to a specific user



//POST: a message
//not assigning to and froms whyyyyy
router.post('/', (req, res, next) => {
    Message.create(req.body)
    .then(newMessage => res.json(newMessage))
    .catch(next)
})

//UPDATE: a message
router.put('/:messageId', (req, res, next) => {
    Message.update(req.body, { where: { id: req.params.messageId }, returning: true })
    .spread((numRows, updatedMessage) => res.json(updatedMessage))
    .catch(next)
})


//all messages sent by a specific user

//all messages sent to a specific user


//DELETE: all messages (need to test)
router.delete('/deleteMessages', (req, res, next) => {
    return Message.destroy()
    .then(allmessages => res.json("deleted all messages"))
})

//messages

//a message
