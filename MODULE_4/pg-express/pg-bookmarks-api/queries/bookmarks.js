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
const createBookmark = async (bookmark) =>{
    try {
        const createdBookmark = await db.one("INSERT INTO bookmarks (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *", [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite])
        return createdBookmark
    } catch (error) {
        return error
    }
}

const deleteBookmark = () => {};

const updateBookmark = () => {};

module.exports = {
    getAllBookmarks,
    getOneBookmark,
    createBookmark
}