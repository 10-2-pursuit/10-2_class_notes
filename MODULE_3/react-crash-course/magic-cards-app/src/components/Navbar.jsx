import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const links = ["Magic Cards", "Home", "Dungeons & Dragons", "James"];
  const paths = ["/mtg", "/", "/dnd", "/james"]

  return (
    <nav>
      <ul className="nav-container">
        {links.map((link, index) => (
          <Link to={ paths[index] }>
            <li className="nav-item">{ link }</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
