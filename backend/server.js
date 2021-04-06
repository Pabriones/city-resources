const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

app.get('/', (req, res) => res.send('API RUNNING'));

//define route
app.use('/api/account', require('./routes/api/account'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));
