const express = require("express");
// we do this for a nested route
const reviews = express.Router({ mergeParams: true });
const { getOneBookmark } = require("../queries/bookmarks");
const {
  getAllReviews,
  getOneReview,
  deleteReview,
  createReview,
  updateReview
} = require("../queries/reviews");

// index
// bookmarks/2/reviews
reviews.get("/", async (req, res) => {
  const { bookmark_id } = req.params;
  try {
    const bookmark = await getOneBookmark(bookmark_id);
    const allReviews = await getAllReviews(bookmark_id);
    res.json({ ...bookmark, allReviews });
  } catch (err) {
    res.json(err);
  }
});

// show
// // bookmarks/2/reviews/2
reviews.get("/:review_id", async (req, res) => {
  const { review_id, bookmark_id } = req.params;
  try {
    const review = await getOneReview(review_id);
    const bookmark = await getOneBookmark(bookmark_id);
    if (review.id) {
      //  this object spreads all of our bookmark which makes a key => val pair for each val
      //  we are going to create a key called review that points to the review
      res.json({ ...bookmark, review });
    }
  } catch (err) {
    res.json(err);
  }
});

// POST
reviews.post("/", async (req, res) => {
    try {
        const { bookmark_id } = req.params;
        const createdReview = await createReview(bookmark_id, req.body)
        res.json(createdReview);
    } catch(err) {
        res.status(400).json( {error: "RUH ROH error!"})
    }
})
// DELETE
reviews.delete("/:review_id", async (req, res) => {
  try {
    const { review_id } = req.params;
    const deletedReview = await deleteReview(review_id);

    if (deletedReview) {
      res.status(200).json({
        success: true,
        payload: {
          data: deletedReview,
        },
      });
    } else {
      res.status(404).json("no review found");
    }
  } catch (err) {
    res.send(err);
  }
});
// we need the ID to determine WHAT TO DELETE

// UPDATE
reviews.put("/:id", async (req, res) => {
    const { id, bookmark_id} = req.params;
    const updatedReview = await updateReview( {bookmark_id, id, ...req.body} );
    if(updatedReview.id) {
        res.status(200).json(updatedReview)
    } else {
        res.status(404).json("REVIEW IS NOT HERE!")
    }

})

module.exports = reviews;
