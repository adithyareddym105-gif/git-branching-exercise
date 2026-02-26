const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment based on NODE_ENV
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `.env.${env}` });

// Create PostgreSQL pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;