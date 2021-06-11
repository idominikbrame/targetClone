const mysql = require('mysql')

function connection() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.136.6.83',
        user: 'root',
        password: 'BB42hh47',
        database: 'imbiss'
      })

      return this.pool
    }
    return this.pool
  }

const instance = connection();

module.exports = instance;