CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    f_name VARCHAR(255),
    l_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE recipe(
    recipe_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    recipe_name VARCHAR(255),
    instructions VARCHAR(1000),
    public BOOLEAN DEFAULT TRUE
);

CREATE TABLE ingredient(
    ingredient_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE occasion(
    occasion_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    name VARCHAR(255)
);

CREATE TABLE occasion_guest(
    occasion_guest_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    recipe_id INTEGER NOT NULL REFERENCES recipe(recipe_id)
);

CREATE TABLE ingredient_recipe(
    ingredient_recipe_id SERIAL PRIMARY KEY,
    ingredient_id INTEGER NOT NULL REFERENCES ingredient(ingredient_id),
    recipe_id INTEGER NOT NULL REFERENCES recipe(recipe_id),
    amount FLOAT
);
CREATE TABLE grocery(
    grocery_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    ingredient_recipe_id INTEGER NOT NULL REFERENCES ingredient_recipe(ingredient_recipe_id)
);
CREATE TABLE occasion_recipe(
    occasion_recipe_id SERIAL PRIMARY KEY,
    occasion_id INTEGER NOT NULL REFERENCES occasion(occasion_id),
    recipe_id INTEGER NOT NULL REFERENCES recipe(recipe_id)
);
