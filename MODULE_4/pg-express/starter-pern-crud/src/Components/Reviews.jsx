import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = import.meta.env.VITE_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`${API}/bookmarks/${id}/reviews`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setReviews(responseJSON.allReviews);
      })
      .catch((error) => console.log(error));
  }, [id, API]);

  const handleAdd = (newReview) => {
    fetch(`${API}/bookmarks/${id}/reviews`, {
      method: "POST",
      body: JSON.stringify(newReview),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setReviews([...reviews, responseJSON]);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (reviewId) => {
    fetch(`${API}/bookmarks/${id}/reviews/${reviewId}`, { method: "DELETE" })
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexDeletedReview = copyReviewArray.findIndex(
          (review) => review.id === reviewId
        );
        console.log(reviewId, indexDeletedReview);
        copyReviewArray.splice(indexDeletedReview, 1);
        console.log("NEW REVIEWS", copyReviewArray);
        setReviews(copyReviewArray);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (updatedReview) => {
    fetch(`${API}/bookmarks/${id}/reviews/${updatedReview.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedReview),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then(responseJSON => {
        const copyReviewArray = [...reviews]
        const indexUpdatedReview = copyReviewArray.findIndex(review => {
            return review.id === updatedReview.id
        })
        copyReviewArray[indexUpdatedReview] = responseJSON
        setReviews(copyReviewArray)
    });
  };

  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>
      {reviews.map((review) => (
        <Review key={review.id} review={review} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </section>
  );
}

export default Reviews;
