const express = require('express');
const Router = express.Router;

const {
    addItem,
    retrieveAllUsers,
    retrieveAllItems,
    update,
    deleteOneItem
} = require('../controllers/crud');

const freEbayRouter = Router();

// GET
freEbayRouter.get('/user', retrieveAllUsers);
freEbayRouter.get('/item', retrieveAllItems);

// POST
freEbayRouter.post('/item/add', addItem);

// PUT
freEbayRouter.put('/', update);

// DELETE
freEbayRouter.delete('/item/delete/:id', deleteOneItem);

module.exports = freEbayRouter;
