const router = require('express').Router()
const {Matches, Pair, User} = require('../db/models')
const Op = require('sequelize').Op
const { removePair, createdPair } = require('../matchFunctions')
module.exports = router


//GET all pairs for a user
//pair = {round, suit1, suit2}
router.get('/:userId', (req, res, next) => {
    const {userId} = req.params
    Pair.findAll({
        where: {
            userId
        },
        include: ["suit1", "suit2"],
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'userId', 'suitor1', 'suitor2']}
    })
    .then(pairs => res.json(pairs))
    .catch(next)
})

//POST create a new pair
router.post('/', (req, res, next) => {
    const { Round, userId, suitor1, suitor2 } = req.body
    createdPair(suitor2, suitor1, Round, userId)
})


//Destroy all my stale pairs
router.delete('/', (req, res, next) => {
    const {me} = req.body
    removePair(me)
})
