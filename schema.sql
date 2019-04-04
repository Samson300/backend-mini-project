CREATE table items (
    id serial PRIMARY KEY,
    name VARCHAR (200),
    DESCRIPTION VARCHAR(200),
    price INTEGER,
    picture VARCHAR(200)

);

create TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(50),
    PASSWORD VARCHAR(50),
    first_name VARCHAR(50),
    phone VARCHAR(20),
    last_name VARCHAR(50),
    email VARCHAR(50)
);

create TABLE for_sale (
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    item_id INTEGER REFERENCES items(id)
);