const Sequelize = require('sequelize')
const db = require('../db')

const Matches = db.define('matches', {
    Round: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
})

module.exports = Matches
