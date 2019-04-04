const db = require('./connect');

class Item {
    constructor (id, name, description, price, picture){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.picture = picture;
    }
    static getAll() {
        return db.any(`select * from items`)
            .then((arrayofItems) => {
                return arrayofItems.map((itemData) => {
                    const anItem = new Item(
                        itemData.id,
                        itemData.name,
                        itemData.description,
                        itemData.price,
                        itemData.picture
                        )
                    return anItem;
                })
            })
    }
}