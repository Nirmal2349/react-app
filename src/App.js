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




