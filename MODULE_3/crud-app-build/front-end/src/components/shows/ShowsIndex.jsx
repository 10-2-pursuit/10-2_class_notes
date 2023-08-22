import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../shows/ShowListing"
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  // setting two states
  // this check for an error
  const [loadingError, setLoadingError] = useState(false)
  // this sets up an array of shows
  const [shows, setShows] = useState([]);
  // when THIS COMPONENT MOUNTS this will fire
  useEffect(() => {
    // we need to get data 
    getAllShows()
      .then((showsJson) => {
        setShows(showsJson)
        setLoadingError(false)
      })
      .catch((err)=> {
        setLoadingError(true);
        console.error(err)
      })
    // and save it to our shows  state
    // dependency array tells us what to follow to fire our useEffect
  },[])

  return (
    <div>
      {/* if loadingError is true - show error ELSE show rest of app */}
      { loadingError ? (
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
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            { shows.map((show) => {
              return <ShowListing show = {show} key = {show.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
