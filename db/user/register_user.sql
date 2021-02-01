INSERT INTO notesyUsers (username, email, password)
VALUES (${username}, ${email}, ${hash})
returning user_id, username, email;