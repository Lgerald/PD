const User = require('./user')
const Matches = require('./matches')
const Message = require('./message')

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
User.hasMany(Matches, {foreignKey: 'selector'})
Message.belongsTo(User, {foreignKey: 'from'})
Message.belongsTo(User, {foreignKey: 'to'})
Matches.belongsTo(User, {foreignKey: 'selected'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Message,
  Matches
}
