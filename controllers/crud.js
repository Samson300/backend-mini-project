const User = require('../models/users');
const Item = require('../models/items');


function create(req, res) {
    res.json({ message: "You created"});
}

async function retrieveAllUsers(req, res) {
    const allUsers = await User.getAll();
    res.json(allUsers);
}

async function retrieveAllItems(req, res) {
    const allItems = await Item.getAll();
    res.json(allItems);
}

function update(req, res) {
    res.json({ message: "You updated"});
}

function deleteOne(req, res) {
    res.json({ message: "You deleted"});
}

module.exports = {
    create,
    retrieveAllUsers,
    retrieveAllItems,
    update,
    deleteOne
};