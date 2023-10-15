import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL

function BookmarkDetails() {
  const [bookmark, setBookmark] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/bookmarks/${index}`)
    .then(response => response.json())
    .then(bookmark => {
      console.log(bookmark)
      setBookmark(bookmark)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const handleDelete = () => {
    const httpOptions = { "method" : "DELETE" };

    // we know we need to delete a specific resource
    fetch(`${API}/bookmarks/${index}`, httpOptions)
      .then((res) => {
        console.log(res)
        alert("hey - bookmark was deleted!  Way to GO!");
        navigate('/bookmarks');
      })
      .catch((err) => console.error(err))
      // so we need to FETCH to our DB to make 
        // we need a  DELETE request
        // then once we've deleted we should reroute the user
        // and pobably let them know we deleted something
  };
  return (
    <article>
      <h3>
        {bookmark.isFavorite ? <span>⭐️</span> : null} {bookmark.name}
      </h3>
      <h5>
        <span>
          <a href={bookmark.url}>{bookmark.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {bookmark.url}
      </h5>
      <h6>{bookmark.category}</h6>
      <p>{bookmark.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/bookmarks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/bookmarks/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default BookmarkDetails;
