import { Link } from "react-router-dom";

function Bookmark({ bookmark, index }) {
  return (
    <tr>
      <td>
        {bookmark.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <a href={bookmark.url} target="_blank" rel="noreferrer">
          {bookmark.name}
        </a>
      </td>
      <td>
        <Link to={`/bookmarks/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Bookmark;
