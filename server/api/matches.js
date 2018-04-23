const router = require('express').Router()
const { Matches, Pair } = require('../db/models')
const Op = require('sequelize').Op
const { addPersonToMatches, downgradeMatch, removePairStatus, clearUselessMatch, checkForPairs } = require('../matchFunctions')


module.exports = router

//POST initial: add 6 to matches, every day
// router.post('/initialMatches', (req, res, next) => {
//     //random numbers from id's available (need to randomize selector and selected still)
//     addPersonToMatches({selector, selected, Round})
//     addPersonToMatches({selector, selected, Round})
//     addPersonToMatches({selector, selected, Round})
//     addPersonToMatches({selector, selected, Round})
// })

//POST add a person to matches
router.post('/', (req, res, next) => {
    const {me, you} = req.body
    Matches.create({me, you})
    .then(newMatch => {
        checkForPairs(newMatch)
        res.json(newMatch)
    })
    .catch(next)
})

//UPDATE match status - rejected -> tested and works
//a user clicks on YOU reject a match
router.put('/rejected', (req, res, next) => {
    //for some reason cannot abstract this function?
    const {me, you} = req.body
        Matches.findOne({where: {me, you}})
          .then(downgrade => {
            downgrade.update({hasBeenRejected: true})
            res.json(downgrade)
          })
          .catch(err => console.error(err))
})
//UPDATE match status - round up -> tested and works
//a user clicks on you (in a pair) to update the round
router.put('/:id', (req, res, next) => {
    Matches.findOne({where: {you: req.params.id}})
    .then(updateMe => updateMe.increment('Round'))
    .then(updates => res.json(updates))
    .catch(next)
})

//UPDATE pair status
//clear any useless matches from pairs
router.put('/rmFromPair', (req, res, next) => {
    const {me, you} = req.body
    removePairStatus(me, you)
    clearUselessMatch(me)
    clearUselessMatch(you)
})
