import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function Movie({
  name,
  poster,
  summary,
  rating,
  deleteButton,
  id,
  editButton,
}) {
  const styles = {
    color: rating > 8.5 ? "red" : "green",
  };

  const [show, setShow] = useState(true);

  const history = useHistory();

  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // }
  return (
    <div className="new">
      <Card className="movie-container">
        <img src={poster} alt="not supported" className="movie-poster" />
        <CardContent>
          <div className="movie-specs">
            <h1 className="movie-name">
              {name}

              <IconButton
                onClick={() => setShow(!show)}
                aria-label="toggle descreption"
              >
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>

              <IconButton
                color="primary"
                onClick={() => history.push(`/movies/${id}`)}
                aria-label="toggle descreption"
              >
                <InfoIcon />
              </IconButton>
            </h1>
            <p style={styles} className="movie-rating">
              ⭐{rating}
            </p>
          </div>

          {/* <button ></button> */}
          {/* <p style={summaryStyles} className="movie-summary">{summary}</p> */}
          {show ? <p className="movie-summary">{summary}</p> : ""}
        </CardContent>
        <CardActions>
          <Counter /> {deleteButton} {editButton}
        </CardActions>
      </Card>
    </div>
  );
}
