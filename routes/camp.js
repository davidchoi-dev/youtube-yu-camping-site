const express = require('express');
const router = express.Router();

const Camp = require('../models/Camp');

const fetchData = require('../fetchData/fetchData');

// fetch data
router.get('/', async (req, res) => {
  try {
    const response = await fetchData();
    console.log(response.data.response.body.items);
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});
router.post('/init', async (req, res) => {
  try {
    const response = await fetchData();
    const camps = response.data.response.body.items.item;
    Camp.collection.insertMany(camps);
    console.log('Multiple documents are inserted');
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;