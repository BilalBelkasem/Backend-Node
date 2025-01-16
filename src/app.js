const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const characterRoutes = require('./routes/characterRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Database connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

// Test connection
sequelize.authenticate()
  .then(() => console.log('Connected to MySQL database'))
  .catch(err => console.error('Database connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/characters', characterRoutes);
app.use('/api/items', itemRoutes);

// Root endpoint with API 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/api-docs.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { sequelize }; 
