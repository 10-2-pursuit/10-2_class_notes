import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'

function App() {
  // we can declare variables inside the body of our component
  const photoOfTheDay = "https://loremflickr.com/320/240";
  const name = "Tim!";
  // the return funciton tells a react component
  // what needs to be rendered on the page
  // the return function must only return ONE element
  // that element can have many nested values
  return (
      <div>
        {/* this is how we comment in JSX*/}
        <div>{ name }</div>
        {/* above and below we use `{}` to indicate we want to pass values */}
        <h1> { photoOfTheDay } </h1>
        <Header />
      
        <h2>React is pretty cool</h2>
        {/* below we are passing the values from lines, 7 and 8 into our img */}
        <img src = { photoOfTheDay } alt={ name } />
        <Footer />
   
      </div>
    )
  }


export default App
