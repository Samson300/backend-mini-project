const User = require('../models/users');
const Item = require('../models/items');


async function addItem(req, res) {
    const addItem = await Item.add(req.body)
    res.json(`The added item was given id ${addItem}!`);
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

async function deleteOneItem(req, res) {
    const { id } = req.params;
    await Item.delete(id);
    res.json(`You have deleted ID: ${id}`);
}

module.exports = {
    addItem,
    retrieveAllUsers,
    retrieveAllItems,
    update,
    deleteOneItem
};