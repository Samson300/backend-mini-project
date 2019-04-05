const db = require('./connect');

const bcrypt = require('bcryptjs');

class User {

    constructor(id, username, password, first_name, last_name, phone, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name =last_name;
        this.phone = phone;
        this.email = email;
    }

    static getAll() {
        return db.any(`select * from users`)
            .then((arrayOfUsers) => {
                return arrayOfUsers.map((userData) => {
                    const aUser = new User(
                        userData.id,
                        userData.username,
                        userData.password,
                        userData.first_name,
                        userData.last_name,
                        userData.phone,
                        userData.email
                        );
                        return aUser;
                    })
                })
            }
            
            static getById(id) {
                return db.one(`select * from users where id=${id}`)
                .then((userData) => {
                    const userInstance = new User (
                        userData.id,
                        userData.username,
                        userData.password,
                        userData.first_name,
                        userData.last_name,
                        userData.phone,
                        userData.email
                );
                return userInstance;
            })
            .catch(() => {
                return null;
            })
    }
    setPassword(newPassword){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }
    checkPassword(aPassword){
        return bcrypt.compareSync(aPassword, this.password);
    }
    static getByEmail(email) {
        return db.one(`select * from users where email=$1`, [email])
                .then(userData => {
                    const aUser = new User(
                        userData.id, 
                        userData.first_name, 
                        userData.last_name, 
                        userData.email, 
                        userData.password);
                    return aUser;
                })
    }
}

module.exports = User;