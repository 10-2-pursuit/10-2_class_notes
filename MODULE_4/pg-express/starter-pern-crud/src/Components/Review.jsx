import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleEdit }) {
  const [viewEditForm, setEditForm] = useState(false);
  const toggleView = () => {
    setEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {viewEditForm ? (
        <>
          <ReviewForm
            reviewDetails={review}
            toggleView={toggleView}
            handleSubmit={handleEdit}
          />
          <button onClick={toggleView}>
            {viewEditForm ? "Cancel" : "Edit this review"}
          </button>
        </>
      ) : (
        <>
          <h4>
            {review.title}
            <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
          <button onClick={toggleView}>
            {viewEditForm ? "Cancel" : "Edit this review"}
          </button>
          <button onClick={() => handleDelete(review.id)}>Delete</button>)
        </>
      )}
    </div>
  );
}

export default Review;
