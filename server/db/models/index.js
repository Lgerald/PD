const User = require('./user')
const Matches = require('./matches')
const Message = require('./message')
const Pair = require('./pair')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 * user has matches
 * matches belongs to user
 * messagesbelong to user
 * use has many messages
 * 
 *    
 */
User.hasMany(Matches, {foreignKey: 'me'}) //the person who chose the other
Message.belongsTo(User, {foreignKey: 'from'})
Message.belongsTo(User, {foreignKey: 'to'})
Matches.belongsTo(User, {foreignKey: 'you'}) // the person who was chosen
Pair.belongsTo(User, {foreignKey: 'userId'})
Pair.belongsTo(User, {foreignKey: 'suitor1'})
Pair.belongsTo(User, {foreignKey: 'suitor2'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Message,
  Matches,
  Pair
}
