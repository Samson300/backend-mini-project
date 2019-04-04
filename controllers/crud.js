
function create(req, res) {
    res.json({ message: "You created"});
}
function retrieveAll(req, res) {
    res.json({ message: "You retrieved all"});
}
function update(req, res) {
    res.json({ message: "You updated"});
}
function deleteOne(req, res) {
    res.json({ message: "You deleted"});
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne
};