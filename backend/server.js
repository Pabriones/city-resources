const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING'));

//define route
app.use('/api/account', require('./routes/api/account'));
app.use('/api/resources', require('./routes/api/resources'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));
