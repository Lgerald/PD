const router = require('express').Router()
const { Matches } = require('../db/models')
module.exports = router


//GET: all matches
router.get('/', (req, res, next) => {
    Matches.findAll()
    .then(matches => res.json(matches))
    .catch(next)
})

// a match
router.get('/find/:matchId', (req, res, next) => {
    Matches.findById(req.params.id)
    .then(match => res.json(match))
    .catch(next)
})


//these may be unneccessary looking forward...
//find all matches by selector
router.get('/selectors/:selectorId', (req, res, next) => {
    Matches.findAll({
        where: {selector: req.params.selectorId}
    })
    .then(selectors => res.json(selectors))
    .catch(next)
})

//find one match by selector
router.get('/selector/:selectorId', (req, res, next) => {
    Matches.findOne({
        where: { selector: req.params.selectorId }
    })
        .then(selector => res.json(selector))
        .catch(next)
})


//find all matches by selected
router.get('/selects/:selectedId', (req, res, next) => {
    Matches.findAll({
        where: {selected: req.params.selectedId}
    })
    .then(selects => res.json(selects))
    .catch(next)
})


//find one match by selected
router.get('/select/:selectedId', (req, res, next) => {
    Matches.findOne({
        where: {selected: req.params.selectedId}
    })
    .then(select => res.json(select))
    .catch(next)
})

//POST: a match
router.post('/:selector/:selected', (req, res, next) => {
    const { selector, selected } = req.params
    Matches.create({ selector, selected })
    .then(newMatch => res.json(newMatch))
    .catch(next)
})



//update round (based on selector and selected ID's)
router.put('/roundUp/:selector/:selected', (req, res, next) => {
    const { selector, selected } = req.params
    Matches.findOne({where: {
        selector, selected
    }})
    .then(match => match.increment('Round'))
    .then(m => res.json(m))
    .catch(next)
})


//update all selected matches
router.put('/selected/:selected', (req, res, next) => {
    const { selected } = req.params
    Matches.update(req.body, { where: { selected }, returning: true })
        .spread((numRows, updatedMatches) => res.json(updatedMatches))
        .catch(next)
})

// UPDATE: all selector matches
router.put('/selector/:selector', (req, res, next) => {
    const { selector } = req.params
    Matches.update(req.body, { where: { selector }, returning: true })
        .spread((numRows, updatedMatches) => res.json(updatedMatches))
        .catch(next)
})

// a match
// router.put('/update/:matchId', (req, res, next) => {
//     Matches.findById(req.params.matchId)
//     .then(updatedMatch => res.json(updatedMatch))
//     .catch(next)
// })

//DELETE: a match
router.delete('/delete/:selector/:selected', (req, res, next) => {
    const { selector, selected } = req.params
    return Matches.destroy({where: { selector, selected }})
        .then(deletedMatchRows => res.json(`${deletedMatchRows} match(es) deleted`))
        .catch(next)
})

