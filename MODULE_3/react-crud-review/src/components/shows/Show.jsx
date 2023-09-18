import { useState, useEffect } from "react";
// why is this important? why do we need state.
// things with STATE update in the browser 
  // this is important because it makes things interactive
    // checkbox etc
    // the other REASON is that it makes REACT FASTER than vanilla DOM
      // vanilla JS doesnt even have components;
      // vanilla JS is slow. - it was never designed to update frequently
      // vanillaJS is like a model T ford
// use effect is the is for making side effects
  // a side effect is something that happens that does not directly change a value
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Show.css";
import ErrorMessage from "../errors/ErrorMessage";
import { getOneShow, destroyShow } from "../../api/fetch";

function Show() { 
  // we initialize a stateful variable - that way if a change is made it rerenders in the browser
  const [show, setShow] = useState({});
  // { name:"whatever, otherThing: false, number:100000 }
  // const show = useState({})[0]
  // const setShow = useState({})[1]   -> note this is not 100% accurate but illustrates the syntax of array destructuring
  const [loadingError, setLoadingError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
// useEffect lets us do stuff;
// how do we tell react what we want it to do?
  // what does Array.map() do? 
    // we do iterate over the array
  // arr.map((x) => x+1)   <--- what do i need to give this map call?
 
  useParams(() => {
    getOneShow(id)
    setShow(showData);
    if (Object.keys(showData).length === 0) {
      setLoadingError(true);
    } else {
      setLoadingError(false);
    }
  
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
                <span>Duration:</span> { show.duration }
              </p>
              <p>
                <span>Listed Categories:</span> { show.listedIn }
              </p>
              <p>
                <span>Country:</span> { show.country }
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
              <button className="delete" onClick={() => handleDelete(id)}> 
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


