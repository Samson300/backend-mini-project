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


// ES6 Templates
const es6Renderer = require('express-es6-template-engine');
app.set('views', './views'); 
app.engine('html', es6Renderer);
app.set('view engine', 'html');

// Models
const User = require('./models/users');
const Item = require('./models/items');


// Router
app.use(express.urlencoded({ extended: true })); // This must be above the router code, or else it'll fail.

const freEbayRouter = require('./routes/freEbayRoutes');
app.use('/freEbay', freEbayRouter);

app.get('/freEbay', (req, res) => {
    res.redirect('/logine')
})

app.get('/login', (req, res) => {
    res.render('login-form')
})

// Listen on our Port
app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}!`);
})