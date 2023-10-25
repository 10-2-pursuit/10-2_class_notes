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
const getOneBookmark = () => {};

const deleteBookmark = () => {};

const updateBookmark = () => {};

module.exports = {
    getAllBookmarks
}