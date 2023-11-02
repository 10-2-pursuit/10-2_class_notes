import { Link } from "react-router-dom";

export default function NavBar() {
  const concatSentence = (stringArray) => {
    let firstWord = stringArray[0];

    for (let i = 1; i < stringArray.length; i++) {
      if(i !== stringArray.length -1 ){
        firstWord += `, ${stringArray[i]}`;
      } else {
        firstWord += ` and ${stringArray[i]}`;
      }
    }
    return firstWord
  }
  return (
    <nav>
      <h1>
        <Link to="/bookmarks">Bookmarks</Link>
      </h1>
      <button>
        <Link to="/bookmarks/new">New Bookmark</Link>
      </button>
    </nav>
  );
}

