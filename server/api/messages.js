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

//POST: a message
router.post('/', (req, res, next) => {
    Message.create(req.body)
    .then(newMessage => res.json(newMessage))
    .catch(next)
})

//UPDATE: all messages
router.put('/:messageId', (req, res, next) => {
    Message.update(req.body, { where: { id: req.params.messageId }, returning: true })
    .spread((numRows, updatedMessage) => res.json(updatedMessage))
    .catch(next)
})

//a message

//DELETE: all messages
router.delete('/deleteMessages', (req, res, next) => {
    return Message.destroy({where: {}})
})

//messages

//a message
