const express = require('express');
const connectDB = require('./config/db');
const app = express();
// const fetchData = require('./fetchData/fetchData');

// connect DB
connectDB();

app.use(express.json({ extened: false }));

// send json for test
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to my world' });
// });

// route handling for camp
app.use('/api/camp', require('./routes/camp'));

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
