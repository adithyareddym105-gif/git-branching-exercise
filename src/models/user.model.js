const pool = require('../config/db');

// Function to create table if it doesn't exist
const createUserTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      )
    `);
    console.log('User table ready');
  } catch (err) {
    console.error('Error creating user table:', err);
  }
};

module.exports = { createUserTable };