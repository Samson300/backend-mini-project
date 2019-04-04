CREATE table items (
    id serial PRIMARY KEY,
    name VARCHAR (200),
    description VARCHAR(200),
    price INTEGER,
    picture VARCHAR(200)

);

create TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(20),
    email VARCHAR(50)
);

create TABLE for_sale (
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    item_id INTEGER REFERENCES items(id)
);