const express = require("express");
// we do this for a nested route
const reviews = express.Router({ mergeParams: true });
const { getOneBookmark } = require("../queries/bookmarks")
const { 
    getAllReviews, 
    getOneReview 
} = require("../queries/reviews")

// index
// bookmarks/2/reviews 
reviews.get("/", async (req, res)=> {
    const { bookmark_id } = req.params;
    try {
        const bookmark = await getOneBookmark(bookmark_id);
        const allReviews = await getAllReviews(bookmark_id);
        res.json( { ...bookmark,  allReviews } );
    } catch(err) {
        res.json(err)
    }
});

// show
// // bookmarks/2/reviews/2 
reviews.get("/:review_id", async (req, res) => {
    const { review_id, bookmark_id } = req.params;
    try {
        const review = await getOneReview(review_id);
        const bookmark = await getOneBookmark(bookmark_id)
        if(review.id) {
            res.json({...bookmark, review })
        }
    } catch(err) {
        res.json(err)
    }
})


module.exports = reviews;