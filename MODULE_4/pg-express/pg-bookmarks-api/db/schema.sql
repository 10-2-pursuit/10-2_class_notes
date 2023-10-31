-- responsible for creating the DB and the TABLE

DROP DATABASE IF EXISTS bookmarks_dev;
-- DROP TABLE IF EXISTS bookmarks;
-- DROP TABLE IF EXISTS reviews;


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

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    bookmark_id INTEGER REFERENCES bookmarks (id)
    ON DELETE CASCADE
);

