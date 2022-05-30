import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@mui/material/Button";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

export function MovieDetails() {
  // movieList
  {
    /* <we always use same name in id> */
  }
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/Nirmal2349/alternate-mockapi/movies/${id}`
    )
      .then((data) => data.json())
      .then((movii) => setMovie(movii));
  }, []);
  // const movie = {};
  // movieList[id]
  const history = useHistory();

  // const movie = {
  //   name: "Naruto",
  //   summary: "This show first grabbed my attention when I saw clips of it in the game for the Xbox 360 called `Naruto: Rise of a Ninja` After I played that game I just had to watch the show and I am glad I did as it turned out to be a very fun and complete show",
  //   rating: "9.5",
  //   poster: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFFSnpXR2JOOEwuX0FDX1NMMTUwMF8uanBn.jpg",
  //   trailer:"https://www.youtube.com/embed/ICrcZeIc3QA"
  // }
  return (
    <div>
      <iframe
        width="100%"
        height="700"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosSharpIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
