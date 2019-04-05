const express = require('express');
const PORT = 3000;
const app = express();

// Session
const session = require('express-session');
const FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(),
    secret: 'asdfghjkl'
}));

// Router
const freEbayRouter = require('./routes/freEbayRoutes');
app.use('/freEbay', freEbayRouter);

// ES6 Templates
const es6Renderer = require('express-es6-template-engine');
app.set('views', './views'); 
app.engine('html', es6Renderer);
app.set('view engine', 'html');

// Models
const User = require('./models/users');
const Item = require('./models/items');


app.use(express.urlencoded({ extended: true }));

app.get('/freEbay', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login-form')
})

app.get('/store', (req, res) => {
    res.render('store')
})

// Listen on our Port
app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}!`);
})