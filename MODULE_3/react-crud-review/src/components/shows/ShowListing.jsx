import {Link} from 'react-router-dom'
import "./ShowListing.css";
// this means showlisting is waiting for a show prop
export default function ShowListing({ show }) {
  return (
    <article className="show">
      <h3 className="title">
        {/* using the show prop here */}
        {/* the <Link /> is for a USER to click on */}
        <Link to={`/shows/${show.id}`}>{show.title}</Link>
      </h3>
      <p className="description">{show.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {show.listedIn}
        </p>
        <p>
          <span>Duration:</span> {show.duration}
        </p>
      </aside>
    </article>
  );
}
