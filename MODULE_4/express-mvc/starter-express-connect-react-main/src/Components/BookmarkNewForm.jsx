import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL

function BookmarkNewForm() {
  const [bookmark, setBookmark] = useState({
    name: "",
    url: "",
    category: "",
    isFavorite: false,
    description: "",
  });

  const navigate = useNavigate();
  const handleTextChange = (event) => {
    // event.target is the input FROM WHERE THIS IS FIRED
    // 
    // [ name ] : Michael's site
    setBookmark({ ...bookmark, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBookmark({ ...bookmark, isFavorite: !bookmark.isFavorite });
  };

  const addBookmark = () => {
    // What do we need to do to add a bookmark?
    // We need to create an options object to pass on 
    const httpOptions = {
      "method" : "POST",
      "body" : JSON.stringify(bookmark),
      "headers" : {
        "Content-type" : "application/json"
      }
    }
    fetch(`${API}/bookmarks`, httpOptions)
      .then((res) => {
        console.log(res)
        alert(`${bookmark.name} was added to the database!`);
        navigate('/bookmarks');
      })
      .catch((err) => console.error(err))
      // we need to ADD a BODY to our POST to our OPTIONS OBJECT holds the BOOKMARK in state
      // We need to send a POST request with fetch
  }

  const handleSubmit = (event) => {
    // this prevents the PAGE from RELOADING;
    event.preventDefault();
    addBookmark();
  };
  return (
    <div className="New">
      {/* this is what we DO when the form is submitted */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={bookmark.name}
          type="text"
          onChange={ handleTextChange }
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
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={bookmark.isFavorite}
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
