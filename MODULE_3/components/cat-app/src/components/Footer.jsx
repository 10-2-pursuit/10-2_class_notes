import React from "react";
import List from "./List";
// here we import the css file to only be applied to this component
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <h3>links</h3>
            <ul>
                {/* here we pass our List component into the body of our Footer */}
                <List/>
            </ul>
        </footer>
    )
}
            

export default Footer;