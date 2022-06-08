import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { API } from "./global";

export function EditMovie({ movieList, setMovieList }) {
  const { id } = useParams();
  // const movie = movieList[id];
  // console.log(movie);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((movii) => setMovie(movii))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>{movie ? <EditMovieForm movie={movie} /> : "LoadingScreen"} </div>
  );
}

function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();

  const editMovie = () => {
    const UpdatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    //   const copyMovieList = [...movieList];
    //   copyMovieList[id] = UpdatedMovie;
    //   setMovieList(copyMovieList);
    //   // setMovieList([...movieList, newMovie]);
    //   history.push("/movies");

    // method must be "PUT" & pass "ID"
    // body => data should be in json format(json data object)
    // headers => we inform its a json data

    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(UpdatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
      // after PUT is complete move to movie => /movies
    }).then(() => history.push("/movies"));
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />

      {/* <input type="text" placeholder="Name"
           /> */}

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
      />

      {/* <input type="text" placeholder="Poster"
           /> */}

      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
      />

      {/* <input type="text" placeholder="Rating"
           /> */}
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
      />

      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="trailer"
      />

      {/* <input type="text" placeholder="Summary"
          /> */}

      {/* <button ></button> */}
      <Button onClick={() => editMovie()} variant="contained" color="success">
        Save
      </Button>
    </div>
  );
}
