const Sequelize = require('sequelize')
const db = require('../db')

const Matches = db.define('matches', {
    Round: {
        type: Sequelize.INTEGER,
        default: 1
    }
})

module.exports = Matches
