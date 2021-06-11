const path = require('path');
const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


function showLoginPage(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
  pool.query()
}

module.exports = {showLoginPage}