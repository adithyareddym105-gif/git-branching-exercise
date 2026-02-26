const pool = require('../config/db');

const createUser = async (name, email) => {
  const result = await pool.query(
    'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
    [name, email]
  );
  return result.rows[0];
};

const getUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

const updateUser = async (id, name) => {
  const result = await pool.query(
    'UPDATE users SET name=$1 WHERE id=$2 RETURNING *',
    [name, id]
  );
  return result.rows[0];
};

const deleteUser = async (id) => {
  await pool.query('DELETE FROM users WHERE id=$1', [id]);
};

module.exports = { createUser, getUsers, updateUser, deleteUser };