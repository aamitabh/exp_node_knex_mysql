if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const knex = require('../db/knexfile')

console.log('process.env.MYDB_DEV_HOST:', process.env.MYDB_DEV_HOST);
console.log('process.env.MYDB_DEV_DATABASE:', process.env.MYDB_DEV_DATABASE);
console.log('process.env.MYDB_DEV_USER:', process.env.MYDB_DEV_USER);
console.log('process.env.MYDB_DEV_PASSWORD:', process.env.MYDB_DEV_PASSWORD);

// console.log(knex);

// console.log('process.env.MYDB_TEST_HOST:', process.env.MYDB_TEST_HOST);
// console.log('process.env.MYDB_TEST_DATABASE:', process.env.MYDB_TEST_DATABASE);
// console.log('process.env.MYDB_TEST_USER:', process.env.MYDB_TEST_USER);
// console.log('process.env.MYDB_TEST_PASSWORD:', process.env.MYDB_TEST_PASSWORD);