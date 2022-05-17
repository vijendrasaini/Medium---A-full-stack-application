const { connect } = require('mongoose')

const db = `mongodb://localhost:27017/medium`

module.exports = () => connect(db)