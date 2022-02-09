import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { AddColor } from "./AddColor";
import "./App.css";
import { Notfound } from "./Notfound";
import { TicTacToe } from "./TicTacToe";
import { Home } from "./Home";
import { Initial_Movie_List } from "./Initial_Movie_List";
import { MovieList } from "./MovieList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export default function App() {
  

  const [movieList, setMovieList] = useState(Initial_Movie_List)


  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState("")
  const [summary, setSummary] = useState("")

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/color-game">colour-game</Link>
        </li>
        <li>
          <Link to="/TicTacToe">TicTacToe-game</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/flims">
          <Redirect to="/movies"/>
        </Route>
         <Route path="/movies/:id">
         <MovieDetails movieList={movieList} />        
          </Route>

        <Route path="/movies">

          <div className="add-movie-form">

            <TextField onChange={(event) => setName(event.target.value)}
              label="Name"
              variant="outlined" />

            {/* <input type="text" placeholder="Name"
           /> */}

            <TextField onChange={(event) => setPoster(event.target.value)}
              label="Poster"
               />

            {/* <input type="text" placeholder="Poster"
           /> */}

            <TextField onChange={(event) => setRating(event.target.value)}
              label="Rating"
               />

            {/* <input type="text" placeholder="Rating"
           /> */}
            <TextField onChange={(event) => setSummary(event.target.value)}
              label="Summary"
               />

            {/* <input type="text" placeholder="Summary"
          /> */}

            {/* <button ></button> */}
            <Button onClick={() => {
              const newMovie = {
                name: name,
                poster: poster,
                rating: rating,
                summary: summary,
              };
              setMovieList([...movieList, newMovie])
            }}
              variant="contained"> Addmovie</Button>
          
         
          </div>
        <MovieList movieList={movieList} setMovieList={setMovieList} />
        </Route>
        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="/TicTacToe">
          <TicTacToe />
        </Route>
        <Route path="**">
          <Notfound />
        </Route>
      </Switch>
    </div>

  );
};

function MovieDetails({movieList}){

  const {id} = useParams()
  const movie = movieList[id];

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
      src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="movie-detail-container">
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>
        <p className="movie-rating">⭐{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary}</p> 
    </div>
  </div>

  )
}



