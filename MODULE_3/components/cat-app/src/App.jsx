import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'

function App() {
  const photoOfTheDay = "https://loremflickr.com/320/240";
  const name = "Tim!"
  return (
      <div>
        {/* how do I comment in react */}
        <div>{ name }</div>
        <h1> { photoOfTheDay } </h1>
        <Header />
      
        <h2>React is pretty cool</h2>
        <img src = { photoOfTheDay } alt={ name } />
        <Footer />
   
      </div>
    )
  }


export default App
