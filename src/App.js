import "./App.css";
import { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { AddColor } from "./AddColor";
import { Notfound } from "./Notfound";
import { TicTacToe } from "./TicTacToe";
import { Home } from "./Home";
import { Initial_Movie_List } from "./Initial_Movie_List";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function App() {
  const [movieList, setMovieList] = useState(Initial_Movie_List);

const history = useHistory();

const [mode,setMode] = useState("dark")
const theme = createTheme({
  palette: {
    mode: mode,
  },
});

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>
                Movies
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/color-game")}
              >
                Colour-game
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/TicTacToe")}
              >
                TicTacToe-game
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/movies/add")}
              >
                Add Movies
              </Button>
              <Button
                color="inherit"
                style={{marginLeft:"auto"}}
                startIcon={
                  mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>
          <div className="route-container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/flims">
                <Redirect to="/movies" />
              </Route>
              <Route path="/movies/add">
                <AddMovie movieList={movieList} setMovieList={setMovieList} />
              </Route>
              <Route path="/movies/edit/:id">
                <EditMovie movieList={movieList} setMovieList={setMovieList} />
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
        </div>
      </Paper>
    </ThemeProvider>
  );
}
