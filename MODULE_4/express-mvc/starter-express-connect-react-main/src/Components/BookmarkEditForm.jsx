import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;
// if we need to edit something - we need the value it has curently;
   // what kind of req do we need to make for that?

function BookmarkEditForm() {
  // why are we grabbing index? we  need top grab a SPECIFIC bookmark
  let { index } = useParams();

  const [bookmark, setBookmark] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    isFavorite: false,
  });
  const navigate = useNavigate(); 
  const handleTextChange = (event) => {
    setBookmark({ ...bookmark, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBookmark({ ...bookmark, isFavorite: !bookmark.isFavorite });
  };
  // once page loads WE NEED THE BOOKMARK to set our state with 
  useEffect(() => {
    fetch(`${API}/bookmarks/${index}`)
      .then(response => response.json())
      .then(bookmark => {
        console.log(bookmark)
        setBookmark(bookmark)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const updateBookmark = () => {
    // our config for the fetch
    const httpOptions = {
      "method" : "PUT",
      "body" : JSON.stringify(bookmark),
      "headers" : {
        "Content-type" : "application/json"
      }
    }

      fetch(`${API}/bookmarks/${index}`, httpOptions)
        .then(() => { 
          alert(`${bookmark.name} has been updated!`);
          navigate(`/bookmarks/${index}`)
        })
        .catch((err) => console.error(err))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateBookmark();
  };
  return (
    <div className="Edit">
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
      <Link to={`/bookmarks/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default BookmarkEditForm;
