import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = ["Magic Cards", "Home", "Dungeons & Dragons", "James"];
  const paths = ["/mtg", "/", "/dnd", "/james"]

  // a function that returns JSX is A Component!
  return (
    <nav>
      <ul className="nav-container">
        {/* we are using the second argument to capture the index of the array we are mapping over */}
        { links.map((link, index) => (
          // user clickable Navigation
          <Link to = { paths[index] } >
            <li className="nav-item">{ link }</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
