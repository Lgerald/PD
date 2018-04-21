const Sequelize = require('sequelize')
const db = require('../db')

const Matches = db.define('matches', {
    Round: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    hasBeenRejected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    inPair: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

//selector
//selected

module.exports = Matches
