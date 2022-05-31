import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const API = "https://my-json-server.typicode.com/Nirmal2349/alternate-mockapi";

export function MovieList() {
  const history = useHistory();

  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      `${API}/movies`,
      {
        method: "GET",
      } //promise
    )
      .then((data) => data.json()) //response object =convert> json data
      .then((movi) => setMovieList(movi));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary, id }, index) => (
        <Movie
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          deleteButton={
            <IconButton
              onClick={() => {
                deleteMovie(id);
              }}
              // delete data from local

              // console.log(index);
              //   const copyMovieList = [...movieList];
              //   copyMovieList.splice(index, 1);
              //   setMovieList(copyMovieList);

              aria-label="delete button"
              color="error"
              style={{ marginLeft: "auto" }}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              onClick={() => history.push(`/movies/edit/${index}`)}
              aria-label="edit"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
          id={id}
        />
      ))}
    </div>
  );
}
