const express = require('express');
const Router = express.Router;
const freEbayRouter = Router();

const {
    addUser,
    addItem,
    retrieveAllUsers,
    retrieveAllItems,
    update,
    deleteOneItem
} = require('../controllers/crud');


// GET
freEbayRouter.get('/user', retrieveAllUsers);
freEbayRouter.get('/item', retrieveAllItems);

// POST
freEbayRouter.post('/item/add', addItem);
freEbayRouter.post('/user/add', addUser);

// PUT
freEbayRouter.put('/', update);

// DELETE
freEbayRouter.delete('/item/delete/:id', deleteOneItem);

module.exports = freEbayRouter;
