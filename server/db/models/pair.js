const Sequelize = require('sequelize')
const db = require('../db')

const Pair = db.define('pair', {
    Round: {
        type: Sequelize.INTEGER
    }
})

module.exports = Pair
