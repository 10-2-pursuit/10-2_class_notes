import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";
import { getOneShow, destroyShow } from "../../api/fetch";

function Show() { 
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneShow(id)
      .then((showData) => {
        setShow(showData);
        if (Object.keys(showData).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoadingError(true);
      });
  }, [id]);

  function handleDelete(id) {
    destroyShow(id)
      .then(() => {
        alert("show destroyed - retrouting to index");
        navigate("/shows");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section className="shows-show-wrapper">
      <h2>{show.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {show.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {show.listedIn}
              </p>
              <p>
                <span>Country:</span> {show.country}
              </p>
              <p>
                <span>Rating:</span> {show.rating}
              </p>
              <p>
                <span>Date Added:</span> {show.dateAdded}
              </p>
            </aside>
            <article>
              <p>{show.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(id)}> {/* Pass 'id' instead of 'show.id' */}
                Remove show
              </button>
              <Link to={`/shows/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Show;


