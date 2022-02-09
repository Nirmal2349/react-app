import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function AddMovie({ movieList, setMovieList }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory()

  return (
    <div className="add-movie-form">

      <TextField onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined" />

      {/* <input type="text" placeholder="Name"
           /> */}

      <TextField onChange={(event) => setPoster(event.target.value)}
        label="Poster" />

      {/* <input type="text" placeholder="Poster"
           /> */}

      <TextField onChange={(event) => setRating(event.target.value)}
        label="Rating" />

      {/* <input type="text" placeholder="Rating"
           /> */}
      <TextField onChange={(event) => setSummary(event.target.value)}
        label="Summary" />

        <TextField onChange={(event) => setTrailer(event.target.value)}
        label="trailer" />

      {/* <input type="text" placeholder="Summary"
          /> */}

      {/* <button ></button> */}
      <Button onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer: trailer,
        };
        setMovieList([...movieList, newMovie]);
        history.push("/movies");
      }}
        variant="contained"> Addmovie</Button>


    </div>
  );

}
