CREATE TABLE notesyUsers (user_id SERIAL PRIMARY KEY, username VARCHAR(20) NOT NULL, email VARCHAR(150) NOT NULL, password VARCHAR(250) NOT NULL);

CREATE TABLE all_notes (note_id SERIAL PRIMARY KEY, uid INT REFERENCES notesyUsers(user_id), note_url TEXT);

CREATE TABLE category_notes (cuid INT REFERENCES notesyUsers(user_id), cnid INT REFERENCES all_notes(note_id), category_name VARCHAR(20) NOT NULL);