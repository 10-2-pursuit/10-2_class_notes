import {Link} from "react-router-dom"
export default function Footer() {

  const year = new Date().getFullYear()
    return (
      <footer>
        <p>I Love Light. All Rights Reserved {year}</p>
        <ul>
          <li> 
            <Link to="/about"><h3>About</h3></Link>
          </li>
          <li>
            <Link to="/candles"><h3>Candles</h3></Link>
          </li>
        </ul>
      </footer>
    );
  };
  
