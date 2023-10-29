import { Link } from "react-router-dom";

function Bookmark({ bookmark }) {
  return (
    <tr>
      <td>
        {bookmark.is_favorite ? (
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
        <Link to={`/bookmarks/${bookmark.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Bookmark;
