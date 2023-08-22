import { useState, useEffect } from "react";
import "./ShowsForm.css";
import { getOneShow, updateShow } from "../../api/fetch";
import { useParams, useNavigate } from "react-router-dom";
export default function ShowsForm() {
  // we are setting state for a blank show object
  const [show, setShow] = useState({
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
  const { id } = useParams();
  const navigate = useNavigate();
  // right at the top - we need to GET the RECORD that matches the ID
  // gets our current data on the show from the DB
  useEffect(() => {
    getOneShow(id)
    // get value from DNB
      .then((showData) => {
        setShow(showData)
      })
      .catch((err) => console.error(err))
  },[id])
  // this is the U in C R U D
  function handleSubmit(event) {
    event.preventDefault();
    updateShow(id, show)
      .then((res) => {
        navigate(`/shows/${id}`)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function handleTextChange(event) {
    setShow({
      ...show,
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
