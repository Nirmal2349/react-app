import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";

export function AddMovie() {
  // use as props before without server { movieList, setMovieList};

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    // method must be post
    // body => data should be in json format(json data object)
    // headers => we inform its a json data
    fetch(`${API}/movies/`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
      // after post is complete move to movie => /movies
    }).then(() => history.push("/movies"));

    // setMovieList([...movieList, newMovie]);
  }
  return (
    <div className="add-movie-form">
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />

      {/* <input type="text" placeholder="Name"
           /> */}

      <TextField
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
      />

      {/* <input type="text" placeholder="Poster"
           /> */}

      <TextField
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
      />

      {/* <input type="text" placeholder="Rating"
           /> */}
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
      />

      <TextField
        onChange={(event) => setTrailer(event.target.value)}
        label="trailer"
      />

      {/* <input type="text" placeholder="Summary"
          /> */}

      {/* <button ></button> */}
      <Button onClick={() => addMovie()} variant="contained">
        Addmovie
      </Button>
    </div>
  )
}
