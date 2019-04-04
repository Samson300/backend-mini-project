const express = require('express');
const Router = express.Router;

const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/crud');

const freEbayRouter = Router();

// GET
freEbayRouter.get('/', retrieveAll);

// POST
freEbayRouter.post('/', create);

// PUT
freEbayRouter.put('/', update);

// DELETE
freEbayRouter.delete('/', deleteOne);

module.exports = freEbayRouter;
