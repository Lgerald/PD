const router = require('express').Router()
const { Match } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Match.findAlll()
    .then(matches => res.json(matches))
    .catch(next)
})
