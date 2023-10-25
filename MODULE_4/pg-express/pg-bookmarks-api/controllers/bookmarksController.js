const express = require("express");
const { getAllBookmarks } = require("../queries/bookmarks.js");

const bookmarks = express.Router();


bookmarks.get("/", async (req, res) => {
    // heres where we need to get THE DATAS
    const allBookmarks = await getAllBookmarks();
    if (allBookmarks[0]) {
        res.status(200)
            .json({ success: true, data: { payload: allBookmarks } });
    } else {
        res.status(500)
        .json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

module.exports = bookmarks;