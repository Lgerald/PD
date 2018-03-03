const router = require('express').Router()
const { Match } = require('../db/models')
module.exports = router


//GET: all matches
router.get('/', (req, res, next) => {
    Match.findAlll()
    .then(matches => res.json(matches))
    .catch(next)
})

// a match

//POST: a match

// UPDATE: all matches

// a match

//DELETE: a match
