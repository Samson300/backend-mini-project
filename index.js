const express = require('express');
const PORT = 3000;

const freEbayRouter = require('./routes/freEbayRoutes');
const app = express();
const session = require('session');
const FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(),
    secret: 'asdfghjkl'
}));
const User = require('./models/users');
const Item = require('./models/items');
app.engine('html', es6Renderer);
app.set('view engine', 'html');

app.set('views', 'views'); 
app.use(express.urlencoded({ extended: true }));
app.use('/freEbay', freEbayRouter);


app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}!`);
})