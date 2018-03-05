const router = require('express').Router()
const { Match } = require('../db/models')
module.exports = router


//GET: all matches
router.get('/', (req, res, next) => {
    Match.findAll()
    .then(matches => res.json(matches))
    .catch(next)
})

// a match
router.get('/match/:matchId', (req, res, next) => {
    Match.findById(req.params.id)
    .then(match => res.json(match))
    .catch(next)
})


//these may be unneccessary looking forward...
//find all matches by selector
router.get('/selectors/:selectorId', (req, res, next) => {
    Match.findAll({
        where: {selector: req.params.selectorId}
    })
    .then(selectors => res.json(selectors))
    .catch(next)
})

//find one match by selector
router.get('/selector/:selectorId', (req, res, next) => {
    Match.findOne({
        where: { selector: req.params.selectorId }
    })
        .then(selector => res.json(selector))
        .catch(next)
})


//find all matches by selected
router.get('/selects/:selectedId', (req, res, next) => {
    Match.findAll({
        where: {selected: req.params.selectedId}
    })
    .then(selects => res.json(selects))
    .catch(next)
})


//find one match by selected
router.get('/select/:selectedId', (req, res, next) => {
    Match.findOne({
        where: {selected: req.params.selectedId}
    })
    .then(select => res.json(select))
    .catch(next)
})

//POST: a match
router.post('/', (req, res, next) => {
    Match.create(req.body)
    .then(newMatch => res.json(newMatch))
    .then(next)
})

// UPDATE: all selector matches
router.put('/selector/:matchId', (req, res, next) => {
    Match.update(req.body, { where: { selector: req.params.matchId }, returning: true })
    .spread((numRows, updatedMatches) => res.json(updatedMatches))
    .catch(next)
})


//update all selected matches
router.put('/selected/:matchId', (req, res, next) => {
    Match.update(req.body, { where: { selected: req.params.matchId }, returning: true })
        .spread((numRows, updatedMatches) => res.json(updatedMatches))
        .catch(next)
})

// a match
router.put('/update/:matchId', (req, res, next) => {
    Match.findById(req.params.matchId)
    .then(updatedMatch => res.json(updatedMatch))
    .catch(next)
})

//DELETE: a match
router.delete('/:matchId', (req, res, next) => {
    return Match.destroy({where: {id: req.params.matchId}})
        .then(deletedMatchRows => res.json(`${deletedMatchRows} match(es) deleted`))
        .catch(next)
})

