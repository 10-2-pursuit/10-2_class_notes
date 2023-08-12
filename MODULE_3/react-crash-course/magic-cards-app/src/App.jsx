import "./App.css";
import Home from "./Pages/Home";
import James from "./components/James";
import Navbar from "./components/Navbar";
import DnDpage from "./pages/DnDpage";
import MTGPage from "./pages/MTGPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mtg" element={<MTGPage />} />
          <Route path="/dnd" element={<DnDpage />} />
          <Route path="/james" element={<James />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
