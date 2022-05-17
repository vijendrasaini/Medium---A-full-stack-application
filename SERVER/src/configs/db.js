const { connect } = require('mongoose')

const db = `mongo://localhost:27015/medium`

module.exports = () => connect(db)