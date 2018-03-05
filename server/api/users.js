const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router
//GET: all users
router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

//one user
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
  .then(user => res.json(user))
  .catch(next)
})


//POST: new user
router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(newUser => res.json(newUser))
  .catch(next)
})

//Update: all user
router.put('/:userId', (req, res, next) => {
  User.update(req.body, {where: {id: req.params.userId}, returning: true})
  .spread((numrows, updatedUser) => res.json(updatedUser))
  .catch(next)
})

//DELETE: a user
router.delete('/:userId', (req, res, next) => {
  return User.destroy({where: {id: req.params.userId}})
  .then(deletedUserRows => res.json(`${deletedUserRows} user(s) deleted`))
  .catch(next)
})

