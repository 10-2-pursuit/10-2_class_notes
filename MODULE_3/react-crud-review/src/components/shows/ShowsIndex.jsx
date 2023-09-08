import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../shows/ShowListing";
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState('false');

  useEffect(() => {
    getAllShows()
    setShows(showsJson); // Error 1: Missing .then() for the promise returned by getAllShows
    setLoadingError(false);
  }, []);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Shows:
            <input
              type="text"
              id="searchTitle"
            />
          </label>
          <section className="shows-index">
            {show.map((show) => { // Error 3: Incorrect prop name 'show' instead of 'shows'
              return <ShowListing shows={show} key={show.id} />; // Error 4: Passing 'shows' prop instead of 'show'
            })}
          </section>
        </section>
      )}
    </div>
  );
}
