import "./App.css";
// import all comoponents
import Home from "./pages/Home";
import James from "./components/James";
import Navbar from "./components/Navbar";
import DnDpage from "./pages/DnDpage";
import MTGPage from "./pages/MTGPage";
// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      {/* but i know its a component */}
      {/* is a bit of advanced React similar to a context */}
      {/*  for know think of the router as AVAILABLE to anything it sandwiches */}
      <Navbar />
        {/* <Switch /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mtg" element={<MTGPage />} />
          <Route path="/dnd" element={<DnDpage />} />
          <Route path="/james" element={<James />} />
        </Routes>
      </div>
  );
}

export default App;
