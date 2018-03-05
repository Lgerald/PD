const Sequelize = require('sequelize')
const db = require('../db')

const Message = db.define('message', {
    content: {
        type: Sequelize.STRING
    },
    // from: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    // to: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // }
})

module.exports = Message
