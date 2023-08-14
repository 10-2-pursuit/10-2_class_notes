import {Link} from 'react-router-dom'
import "./ShowListing.css";

export default function ShowListing({ show }) {
  return (
    <article className="show">
      <h3 className="title">
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
