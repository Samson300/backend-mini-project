const express = require('express');
const PORT = 3000;

const thinkpadRouter = require('./routes/thinkpad');
const app = express();

app.use('/thinkpads', thinkpadRouter);


app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}!`);
})