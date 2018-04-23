const router = require('express').Router()
const {Matches, Pair, User} = require('../db/models')
const Op = require('sequelize').Op
module.exports = router


//GET all pairs for a user
router.get('/:userId', (req, res, next) => {
    const {userId} = req.params
    Pair.findAll({
        where: {
            userId
        },
        include: [{all: true, nested: true}]

    })
    .then(pairs => res.json(pairs))
    .catch(next)
})
//currently only eager loading suitor2 for some reason?

//POST create a new pair


//UPDATE pair status (when no longer in a pair)

//Destroy stale pairs
