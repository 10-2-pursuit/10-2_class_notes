import Link  from 'react-router-dom'
import "./ShowListing.css";

export default function ShowListing({ show }) {
  return (
    <article className="show">
      <h3 className="title">
        {/* Introduce Error: Misplaced closing curly brace */}
        <Link to={`/shows/show.id}`>{show.title}</Link>
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

/* Broken Code Summary:

1. There is a misplaced closing curly brace in the `<Link>` element, which results in a syntax error.

*/
