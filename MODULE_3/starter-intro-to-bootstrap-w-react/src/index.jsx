import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
// finds an element with the ID of root;
// this finds that element and REACTDOM.render() injects tha APP with the APP component
ReactDOM.render(<App />, document.getElementById("root"));
