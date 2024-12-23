const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... some database query to fetch user data ...
    const userData = await database.query(`SELECT * FROM users WHERE id = ${userId}`);
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.json(userData);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).send('Internal Server Error');
  }
});