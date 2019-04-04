const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const User = require('../models/users');
const Item = require('../models/items');

describe('Users model', () => {
    it('should be able to retrieve all user data', async () => {
        const allUsers = await User.getAll();
        allUsers.should.be.an.instanceOf(Array);
    });

    it('should be able to retrieve by id', async () => {
        const theUser = await User.getById(3);
        theUser.should.be.an.instanceOf(User);
    });
});

describe('Items model', () => {
    it('should be able to retrieve all item data', async () => {
        const allItems = await Item.getAll();
        allItems.should.be.an.instanceOf(Array);
    });
    it('should be able to retrieve by id', async () => {
        const theItem = await Item.getById(2);
        theItem.should.be.an.instanceOf(Item);
    });
});