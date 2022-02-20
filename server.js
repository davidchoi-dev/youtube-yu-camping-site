const express = require('express');
const app = express();

app.use(express.json({ extened: false }));

// route handling for camp
app.use('/api/camp', require('./routes/camp'));

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
