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
    static getById(id) {
        return db.one(`select * from items where id=${id}`)
            .then((itemData) =>{
                const itemInstance = new Item(
                        itemData.id,
                        itemData.name,
                        itemData.description,
                        itemData.price,
                        itemData.picture
                )
                return itemInstance;
            })
            .catch(() => {
                return null;
            })
    }
    static add(itemData){
        return db.one(`
        insert into items
            (name, description, price, picture)
        values
            ($1, $2, $3, $4)
            returning id`,[itemData.name, itemData.description, itemData.price, itemData.picture])
        .then((data) =>{
            console.log(data);
            return data.id;
        })
    }
    static delete(id){
        return db.result('delete from items where id=$1', [id]);
    }
    save() {
        return db.result(`
        update items set
            name='${this.name}',
            description='${this.description}',
            price='${this.price}',
            picture='${this.picture}'
        where id=${this.id}`);
    }
}
module.exports = Item;