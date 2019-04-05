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
    res.render('login-form', {
    });
});
app.post('/login', async (req, res) => {
    // get the users info by using the getByEmail function in users.js
    const theUser = await User.getByEmail(req.body.email);
    // check if users entered password is correct with checkPassword in users.js
    const correctPassword = theUser.checkPassword(req.body.password);
    // if the entered password is correct redirect to the store
    if(correctPassword){
        // save the users id in session storage
        req.session.user = User.id;
        req.session.save(() => {
            // after users info password is checked redirect them the the store
            res.redirect('/store');
        });
        // if the password they entered is not correct, send them the login for again
    } else {
        res.render('login-form', {
            locals: {
                email: req.body.email,
                message: 'Incorrect password, Try again.'
            }
        });
    }
});
app.get('/users/:id', async (req, res) => {
    const theUser = await User.getById(id)
    res.json(theUser)
})
app.get('/store', async (req, res) => {
    const allItems = await Item.getAll();
    res.render('store')
})

// Listen on our Port
app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}!`);
})