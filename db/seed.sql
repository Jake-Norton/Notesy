CREATE TABLE users (user_id SERIAL PRIMARY KEY, username VARCHAR(20) NOT NULL, email VARCHAR(150) NOT NULL, password VARCHAR(50) NOT NULL);

CREATE TABLE all_notes (note_id SERIAL PRIMARY KEY, uid INT REFERENCES users(user_id), note_url TEXT);

CREATE TABLE category_notes (user INT REFERENCES users(user_id), note INT REFERENCES all_notes(note_id), category_name VARCHAR(20) NOT NULL);