import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL

function BookmarkDetails() {
  const [bookmark, setBookmark] = useState([]);
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/bookmarks/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setBookmark(responseJSON)
    })
    .catch(error => console.log(error))
  }, [id, API])

  const handleDelete = () => {
    deleteBookmark()
  }

  const deleteBookmark = () => {
    const httpOptions = { method: "DELETE" }
    fetch(`${API}/bookmarks/${id}`, httpOptions)
    .then(() => navigate(`/bookmarks`))
    .catch(error => console.log(error))
  }

  return (
    <article>
      <h3>{true ? <span>⭐️</span> : null}</h3>
      <h5>
        <span>
          <a href={bookmark.url}>{bookmark.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; {bookmark.url}
      </h5>
      <h6>{bookmark.category}</h6>
      <p>{bookmark.description}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/bookmarks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/bookmarks/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default BookmarkDetails;
