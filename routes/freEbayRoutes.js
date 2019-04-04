const express = require('express');
const Router = express.Router;

const {
    create,
    retrieveAllUsers,
    retrieveAllItems,
    update,
    deleteOne
} = require('../controllers/crud');

const freEbayRouter = Router();

// GET
freEbayRouter.get('/user', retrieveAllUsers);
freEbayRouter.get('/item', retrieveAllItems);

// POST
freEbayRouter.post('/', create);

// PUT
freEbayRouter.put('/', update);

// DELETE
freEbayRouter.delete('/', deleteOne);

module.exports = freEbayRouter;
