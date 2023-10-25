-- responsible for creating the DB and the TABLE

DROP DATABASE IF EXISTS bookmarks_dev;
CREATE DATABASE bookmarks_dev;

\c bookmarks_dev;

CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    category TEXT,
    description TEXT,
    is_favorite BOOLEAN
);

