const router = require('express').Router()
const { Matches, Pair } = require('../db/models')
const Op = require('sequelize').Op

module.exports = router


//GET all Me's matches
router.get('/:userId', (req, res, next) => {
    
})

//POST initial: add 6 to matches, every day

//POST add a person to matches

//UPDATE match status

//UPDATE pair status

//DELETE useless matches