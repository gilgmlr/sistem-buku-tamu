const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

// Import routes
const bagianRoutes = require('./routes/bagianRoutes');
const subBagRoutes = require('./routes/subBagRoutes');
const tiketAntreanRoutes = require('./routes/tiketAntreanRoutes');
const tiketTamuRoutes = require('./routes/tiketTamuRoutes');
const identitasTamuRoutes = require('./routes/identitasTamuRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Register routes
app.use('/api', bagianRoutes);
app.use('/api', subBagRoutes);
app.use('/api', tiketAntreanRoutes);
app.use('/api', tiketTamuRoutes);
app.use('/api', identitasTamuRoutes);


// Sync database
sequelize.sync({ force: false })
  .then(() => console.log('Database connected and synced'))
  .catch(err => console.error('Error syncing database:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
