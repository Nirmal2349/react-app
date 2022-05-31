import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

export function MovieList() {
  const history = useHistory();

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Nirmal2349/alternate-mockapi/movies"
    )
      .then((data) => data.json())
      .then((movi) => setMovieList(movi))
      // .trycatch((err) => console.log(err));
  }, []);
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
                console.log(index);

                const copyMovieList = [...movieList];
                copyMovieList.splice(index, 1);
                setMovieList(copyMovieList);
              }}
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
