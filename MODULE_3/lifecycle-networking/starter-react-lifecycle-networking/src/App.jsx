import { useState, useEffect } from "react";
import days from "./data";
const colors = [
  "papayawhip",
  "blanchedalmond",
  "peachpuff",
  "bisque",
  "cornsilk",
  "lightyellow",
];

function App() {
  // returns a state variable 'color' and returns a function
  // 'setColor' to update the state var to trigger a re-render
  const [color, setColor] = useState("lemonchiffon");
  // dog = {}; setDog is the update function
  const [dog, setDog] = useState({});
  // index = 0; setIndex
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(0);
  const [today, setToday] = useState({});
  const [vibe, setVibe] = useState("");
  // a hook that runs ANY TIME STATE CHANGES
  // as well as fires WHEN THE COMPONENT MOUNTS
  // use Effect is short for use side Effect
  // pass a anonymous function
  function getFeaturedDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => (data.json()))
      .then((json)=> {
        setDog(json)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(()=> {
    getFeaturedDog()
  },[])

  useEffect(() => {
    // we have to tell useEffect what to do
      setToday(days[index])
      console.log(today)
    // second arg is a dependency array;
  },[index])

  useEffect(()=> {
    // only fires when the component mounts
    setNumber(Math.random())
    // use effect will fire if var changes state in deps array
  },[])

  useEffect(() => {
    setColor(colors[index])
  },[ today.month ])

  function handleOnChange(event) {
    setVibe(event.target.value);
  }

  function updateIndex() {
    setIndex((index + 1) % days.length);
  }

  return (
    <div className="App">
      <header style={{ backgroundColor: color }}>
        <h1>Daily Home Page </h1>
        <button onClick={updateIndex}>Update Day</button>
      </header>
      <main>
        <div className="date">
          <h2>Todays date:</h2>
          <h3>{today.weekday}</h3>
          <h4>{today.month}</h4>
          <h5>{today.day}</h5>
        </div>
        <div className="lucky">
          <h2>Today's lucky number is: {number}</h2>
        </div>
        <div className="vibe">
          <input
            type="text"
            onChange={handleOnChange}
            placeholder="enter your vibe here"
          />
          <h4>Today's vibe is: </h4>
          <h5>{vibe}</h5>
        </div>
        <div className="dog">
          <button onClick={getFeaturedDog}>Change dog</button>
          <h2>Featured dog:</h2>
          <img src={dog.message} alt="Featured Dog" />
        </div>
      </main>
    </div>
  );
}

export default App;
