const express = require('express');
const PORT = 3000;

const freEbayRouter = require('./routes/freEbayRoutes');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use('/freEbay', freEbayRouter);



app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}!`);
})