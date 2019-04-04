insert into users
    (username, password, first_name, last_name, phone, email)
values
    ('somethingclean', 'mypass', 'Samson', 'OShaughnessy', '111-222-3333', 'sam@sam.com'),
    ('veryclean', 'passisclean', 'Ryan', 'Yim', '404-124-2131', 'cleanest@person.com'),
    ('notclean', 'superpass', 'Jason', 'Boerner', '539-668-3412', 'lean@gmail.com'),
    ('verycatty', 'oakleyislife', 'Oakley', 'Aquino', '770-625-5390', 'catswithhats@catboss.com')
;



insert into items
    (name, description, price, picture)
values
    ('keyboard', 'awesome', 0.00, 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj6kMqr4LbhAhWRTt8KHSb7AQQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pcgamingrace.com%2Fproducts%2Fgmmk-full-brown-switch&psig=AOvVaw3s6zHvy_O6eZL2G-1PjmG7&ust=1554478093558857'),
    ('mouse', 'the best', 0.00, 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjg-M7N4LbhAhWlT98KHXZJD6gQjRx6BAgBEAU&url=https%3A%2F%2Fwww.meowingtons.com%2Fproducts%2Fmeowingtons-mouse-hunt&psig=AOvVaw30nODfxYjjUhSJEq14a5Cf&ust=1554478129469298'),
    ('headset', 'alright', 0.00, 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjs1drZ4LbhAhWMl-AKHfaWD6cQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.com%2FBENGOO-Controller-Cancelling-Headphones-Surround%2Fdp%2FB01H6GUCCQ&psig=AOvVaw147Inwc71sbiyPKGjsl0-v&ust=1554478198368811'),
    ('Chris macbook', 'average', 0.00, 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj5pM7i4LbhAhXDdN8KHYT4A-wQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pcmag.com%2Freview%2F362565%2Fapple-macbook-pro-13-inch-2018-touch-bar&psig=AOvVaw2ukoSk3XQ-kw6EyBCG8vhB&ust=1554478214839409')
;

insert into for_sale
    (user_id, item_id)
values
    (1, 3),
    (2, 1),
    (3, 2),
    (4, 4)
;