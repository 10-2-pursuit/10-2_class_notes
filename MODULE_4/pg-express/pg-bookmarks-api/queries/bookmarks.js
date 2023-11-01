// this file is in charge of QUERYING
// the DB and returning the data to the controller

const db = require("../db/dbConfig.js");

const getAllBookmarks = async () => {
    try {
        const allBookmarks = await db.any("SELECT * FROM bookmarks");
        return allBookmarks
    } catch(err) {
        return err
    }
}
const getOneBookmark = async (id) => {
    try{
        const oneBookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id)
        return oneBookmark
    } catch (error){
        return error
    }
};
const createBookmark = async (bookmark) => {
    try {
        const createdBookmark = await db.one("INSERT INTO bookmarks (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *", [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite])
        return createdBookmark
    } catch (error) {
        return error
    }
}

const deleteBookmark = async (id) => {
    try {
        const deletedBookmark = await db.one(
            "DELETE from bookmarks WHERE id = $1 RETURNING *",
            id
        )
        return deletedBookmark
    } catch(error) {
        return error
    }
};

const updateBookmark = async (id, bookmark) => {
    try {
        const { name, url, category, is_favorite } = bookmark;
        const updatedBookmark = await db.one(
            "UPDATE bookmarks SET name=$1, url=$2,category=$3, is_favorite=$4 WHERE id=$5 RETURNING *",
            [name, url, category, is_favorite, id]
        );
        return updatedBookmark
    } catch(err) {
        return err
    }
};

module.exports = {
    getAllBookmarks,
    getOneBookmark,
    createBookmark,
    deleteBookmark,
    updateBookmark
}