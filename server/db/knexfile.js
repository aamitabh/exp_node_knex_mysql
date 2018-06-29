var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.MYDB_DEV_HOST,
    user: process.env.MYDB_DEV_USER,
    password: process.env.MYDB_DEV_PASSWORD,
    database: process.env.MYDB_DEV_DATABASE
  }
})

module.exports = knex