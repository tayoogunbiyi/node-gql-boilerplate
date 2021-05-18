require('dotenv').config()

const {DB_USERNAME,DB_PASSWORD,DB_NAME,DB_HOST,DB_PORT,DB_DIALECT} = process.env
const {TEST_DB_USERNAME,TEST_DB_PASSWORD,TEST_DB_NAME,TEST_DB_HOST,TEST_DB_PORT,TEST_DB_DIALECT} = process.env

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port":DB_PORT,
    "dialect": DB_DIALECT
  },
  "test": {
    "username": TEST_DB_USERNAME,
    "password": TEST_DB_PASSWORD,
    "database": TEST_DB_NAME,
    "host": TEST_DB_HOST,
    "port":TEST_DB_PORT,
    "dialect": TEST_DB_DIALECT
  }
}
