const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
// const corsOptions = {
//     origin: 'http://localhost:3000',
// }
app.options('*', cors());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//connect database
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING'));

//define route
app.use('/api/account', require('./routes/api/account'));
app.use('/api/resources', require('./routes/api/resources'));
app.use('/api/forms', require('./routes/api/forms'));
app.use('/api/getforms', require('./routes/api/getforms'));
app.use('/api/getFilterData', require('./routes/api/getFilterData'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/getAccount', require('./routes/api/getAccount'));
app.use('/api/changePassword', require('./routes/api/changeCred'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server started on port ${PORT}' + PORT));
