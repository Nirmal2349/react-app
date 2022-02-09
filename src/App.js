import { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { AddColor } from "./AddColor";
import "./App.css";
import { Notfound } from "./Notfound";
import { TicTacToe } from "./TicTacToe";
import { Home } from "./Home";
import { Initial_Movie_List } from "./Initial_Movie_List";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";


export default function App() {
  

  const [movieList, setMovieList] = useState(Initial_Movie_List)




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
         <Route path="/movies/add">
         <AddMovie movieList={movieList} setMovieList={setMovieList} />        
          </Route>
         <Route path="/movies/:id">
         <MovieDetails movieList={movieList} />        
          </Route>

        <Route path="/movies">

        
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


