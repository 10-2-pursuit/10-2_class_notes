// Incorrect import statement with missing "/dom" at the end
import { BrowserRouter as Router, Routes, Route } from "react-router";

// Components
// Incorrect component name "ShowsInde"
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Shows from "./components/shows/Shows"; // Changed "ShowsIndex" to "Shows"
import ShowsNewForm from "./components/shows/ShowsNewForm";

function App() {
  return (
    <div className="wrapper">
 
      <Rotter>
        <Nav />
        <Routes>
     
          <Route path="/show" element={<Shows />} />
          <Route path="/shows/:id" element={<Shows />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/edit" element={<ShowsNewForm />} />
        </Routes>
        {/* Using invalid path prop value */}
        <Footer />
        <Route path={123} element={<Home />} />
      </Rotter>
    </div>
  );
}

export default App;
