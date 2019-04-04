const express = require('express');
const Router = express.Router;

const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/thinkpad');

const thinkpadRoutes = Router();

// GET
thinkpadRoutes.get('/', retrieveAll);

// POST
thinkpadRoutes.post('/', create);

// PUT
thinkpadRoutes.put('/', update);

// DELETE
thinkpadRoutes.delete('/', deleteOne);

module.exports = thinkpadRoutes;
