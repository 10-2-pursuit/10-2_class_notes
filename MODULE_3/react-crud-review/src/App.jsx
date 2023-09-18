// Incorrect import statement with missing "/dom" at the end
// import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useEffect, useState } from "react";

// import Footer from "./components/common/Footer";
// import Home from "./components/home/Home";
// import Nav from "./components/common/Nav";
// import Shows from "./components/shows/Shows";
// import ShowsNewForm from "./components/shows/ShowsNewForm";

function App() {
  const [ourInput, setOurInput] = useState("");
  const [bool, setBool] = useState(true);

  const handleTextChange = (e) => {
    // debugger
    const text = e.target.value;
    setOurInput(text);
  };
  const toggleBool = () => {
    setBool(!bool);
  };

  const noValueMessage = <h4>no text yet</h4>;
  // if we use the word invoke we are talking about a function
  // a callback IS a function - but one that is given an argument to another funciton
  // we want you to do something
  // comoponent lifeCycle
  useEffect(
    // this is when we go get data
    // this is when we make an api call
    () => {
      // this callback is what we want you to do
      alert(`state changed to ${ourInput}`);
    }, []);
  // we have not hit this return yet;
  return (
    <div className="wrapper">
      <h1>Bool {bool.toString()}</h1>
      <button onClick={toggleBool}>change bool</button>
      

  

      {/* checks if input is truthy or falsey  */}
      <h2>checkout our state: {ourInput ? ourInput : noValueMessage} </h2>
      <form>
        <label htmlFor="text-input">type something</label>
        <input
          id="text-input"
          name="text-input"
          type="text"
          value={ourInput}
          onChange={handleTextChange}
        />
      </form>

      {/* <Rotter>
        <Nav />
        <Routes>
     
          <Route path="/show" element={<Shows />} />
          <Route path="/shows/:id" element={<Shows />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/edit" element={<ShowsNewForm />} />
        </Routes>
        
        <Footer />
        <Route path={123} element={<Home />} />
      </Rotter> */}
    </div>
  );
}

export default App;
