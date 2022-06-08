import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { API } from "./global";

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

  // delete the movie => refresh the data
  
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
              onClick={() => history.push(`/movies/edit/${id}`)}
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
