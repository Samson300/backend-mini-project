const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const User = require('../models/users');

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