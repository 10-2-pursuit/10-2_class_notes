import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function BookmarkNewForm() {
  const navigate = useNavigate();
  const [bookmark, setBookmark] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
    description: "",
  });

  // Add a bookmark. Redirect to the index view.
  const addBookmark = () => {
    fetch(`${API}/bookmarks`, {
      method: "POST",
      body: JSON.stringify(bookmark),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/bookmarks`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setBookmark({ ...bookmark, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBookmark({ ...bookmark, is_favorite: !bookmark.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBookmark();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={bookmark.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={bookmark.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={bookmark.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={bookmark.is_favorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={bookmark.description}
          onChange={handleTextChange}
          placeholder="Describe why you bookmarked this site"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default BookmarkNewForm;
