const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const courseRoutes = require('./routes/courseRoutes');
const leadRoutes = require('./routes/leadRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const db = require('./database');

app.use(cors());
app.use(bodyParser.json());

app.use('/courses', courseRoutes);
app.use('/leads', leadRoutes);
app.use('/instructors', instructorRoutes);

const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => console.error('Error connecting to the database:', error));
