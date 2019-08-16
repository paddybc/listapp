import dotenv from 'dotenv';
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}

const config = {
  app: {
    port: process.env.APP_PORT
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  }
};

module.exports = config;