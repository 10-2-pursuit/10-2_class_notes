const db = require("../db/dbConfig.js");

const getAllReviews = async (bookmark_id) => {
    try {
        const allReviews = await db.any("SELECT * FROM reviews WHERE bookmark_id=$1",
        bookmark_id
        );
        return allReviews
    } catch(err) {
        return err
    }
}
const getOneReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneReview
    } catch (error){
        return error
    }
} 

// DELETE
const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one(
            "DELETE from reviews WHERE id = $1 RETURNING *",
            id
        )
        return deletedReview
    } catch (err) {
        return err
    }
}

// POST
const createReview = async (bookmark_id, review) => {
    try {
        const { reviewer, rating, content, title } = review;
        const createdReview = await db.one(
            `INSERT INTO reviews (reviewer, rating, content, title, bookmark_id)
            VALUES
            ($1, $2, $3, $4, $5) RETURNING * 
            `,
            [reviewer, rating, content, title, bookmark_id]
        );
        return createdReview
    } catch(err) {
        return err
    }

}

// PUT 

const updateReview = async (review) => {
    try {
        const { reviewer, rating, content, title, id, bookmark_id} = review;
        const updatedReview = await db.one(
            `UPDATE reviews SET 
            reviewer=$1, rating=$2, content=$3, title=$4, bookmark_id=$5 WHERE id=$6 
            RETURNING *`,
            [reviewer, rating, content, title, bookmark_id, id]
        );
        return updatedReview
    } catch(err) {
        return err
    }
}




module.exports = {
    getAllReviews,
    getOneReview,
    deleteReview,
    createReview,
    updateReview
    
}