const express = require('express');
const app = express();
const fetchData = require('./fetchData/fetchData');

app.use(express.json({ extened: false }));

// send json for test
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my world' });
});

// fetch data
app.get('/fetch', async (req, res) => {
  try {
    const response = await fetchData();
    console.log(response.data.response.body.items);
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
