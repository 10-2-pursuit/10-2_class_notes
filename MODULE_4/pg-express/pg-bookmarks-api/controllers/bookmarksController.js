const express = require("express");
// these are QUERIES - SQL commands to GET OUR DATA
const { 
    getAllBookmarks, 
    getOneBookmark, 
    createBookmark, 
    deleteBookmark, 
    updateBookmark
} = require("../queries/bookmarks.js");
// 
const { checkName, checkBoolean } = require("../validations/checkBookmarks.js")
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

bookmarks.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneBookmark = await getOneBookmark(id)
    if (oneBookmark){
        res.json(oneBookmark)
    } else {
        res.status(404).json({error: "not found!"})
    }
})

bookmarks.post("/", checkName, checkBoolean, async (req, res)=> {
    try {
        // old way
        // createBookmark(req.body)
        //     .then(data=>res.json(data))
        // new way
        const createdBookmark = await createBookmark(req.body)
        res.json(createdBookmark)
    } catch (error) {
        res.status(400).json({error: "OH noeeees! You got a big huge error"})
    }
})

bookmarks.delete("/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const deletedBookmark = await deleteBookmark(id);
        if(deletedBookmark) {
            res.status(200).json({success:true, payload: {data: deletedBookmark}})
        } else {
            res.status(404).json("bookmark not found - uh oh")
        }
    } catch(err) {
        res.send(err)
    }
});

bookmarks.put("/:id", async(req, res) => {
    const { id } = req.params;
    const updatedBookmark = await updateBookmark(id, req.body);
    if(updatedBookmark.id) {
        res.status(200).json(updatedBookmark);
    } else (
        res.status(404).json("no bookmark found with that id")
    )
})

module.exports = bookmarks;