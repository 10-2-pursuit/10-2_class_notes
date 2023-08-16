import { useState  } from "react";
import { createShow } from "../../api/fetch";
import { useNavigate } from "react-router-dom";
import "./ShowsForm.css";

export default function ShowsForm() {
  // setting state for show - default as an very specific object
  const [show, setShow] = useState({
    // data normalization - we are designing an input that will corespond
    // to how the api sctructures its DATA
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // send the data to the server from our State
    createShow(show)
      .then((createdShow) => {
        console.log(createdShow)
        alert(`show created: ${createdShow.title} id : ${createdShow.id}`)
        // we got the id in the response
        // and passed it to useNavigate to satisfy our shows/:id route
        navigate(`/shows/${createdShow.id}`)
      })
      .catch((err) => {
        console.error(err)
      })

  }
  // this function a change in some text input
  // this is veeeeeeeeeerrry slick
  function handleTextChange(event) {
    // event is passed from React's change detection
    setShow({
      ...show,
      // passing the id from the event as the key to the object
      // passing the value from the event as the OBJECTS's value
      // "title" : "whatever value in in the input"
      [event.target.id]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={show.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={show.description}
        onChange={handleTextChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={show.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={show.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={show.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={show.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={show.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={show.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={show.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
    </form>
  );
}
