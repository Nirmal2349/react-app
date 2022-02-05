import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Switch, Route, Link } from "react-router-dom";
import { AddColor } from "./AddColor";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import "./App.css";


export default function App() {
  const Initial_Movie_List = [
    {
      name: "Black clover",
      summary: "Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus.",
      rating: "9.4/10",
      poster: "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
    }, {
      name: "1punch man",
      summary: "One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch",
      rating: "8/10",
      poster: "https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg"
    }, {
      name: "Haikyuu",
      summary: "Based on Haruichi Furudate's popular shounen manga of the same name, Haikyuu!! is an exhilarating and emotional sports comedy following two determined athletes as they attempt to patch a heated rivalry in order",
      rating: "9/10",
      poster: "https://ae01.alicdn.com/kf/Hcf24eb4a355c4694b0375da7259a8d37y/Anime-Haikyuu-Poster-Decor-Wall-Sticker-Haikyuu-Anime-High-School-Volleyball-Junior-Wall-Poster-Photo-Sticker.jpg"
    }, {
      name: "Demonslayer",
      summary: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister",
      rating: "9/10",
      poster: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFUcTlvSmp1TUwuX0FDX1NMMTUwMF8uanBn.jpg"
    }, {
      name: "Naruto",
      summary: "This show first grabbed my attention when I saw clips of it in the game for the Xbox 360 called `Naruto: Rise of a Ninja` After I played that game I just had to watch the show and I am glad I did as it turned out to be a very fun and complete show",
      rating: "9.5/10",
      poster: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFFSnpXR2JOOEwuX0FDX1NMMTUwMF8uanBn.jpg"
    }
  ];

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
          
          <div className="movie-list">
            {movieList.map(({ name, poster, rating, summary }, index) => (
              <Movie
                key={index}
                name={name}
                poster={poster}
                rating={rating}
                summary={summary}
              />
            ))}

          </div>
          </div>

        </Route>
        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="/TicTacToe">
          <TicTacToe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>

  );
};



function Movie({ name, poster, summary, rating }) {
  const styles = {
    color: rating > 9 ? "green" : "red"
  };

  const [show, setShow] = useState(true);

  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // }
  return (
    <div className="new">
      <Card className="movie-container">
        <img src={poster} alt="not supported" className="movie-poster" />
        <CardContent>
          <div className="movie-specs">
            <h1 className="movie-name">{name}
              <IconButton onClick={() => setShow(!show)} aria-label="toggle descreption">
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </h1>
            <p style={styles} className="movie-rating">⭐{rating}</p>
          </div>

          {/* <button ></button> */}
          {/* <p style={summaryStyles} className="movie-summary">{summary}</p> */}
          {show ? <p className="movie-summary">{summary}</p> : ""}
        </CardContent>
        <CardActions>
          <Counter />
        </CardActions>
      </Card>
    </div>
  );
};

function Counter() {
  const [like, setLike] = useState(0)
  const [disLike, setdisLike] = useState(0)
  return (
    <div className="counter-container">

      {/* <button >👍{like}</button> */}
      <IconButton aria-label="like button" className="like-dislike" onClick={() => setLike(like + 1)} color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      {/* <Button className="like-dislike" onClick={() => setLike(like + 1)}
        variant="contained"></Button> */}

      {/* <button >{dislike}</button> */}
      <IconButton aria-label="dislike button" className="like-dislike" onClick={() => setdisLike(disLike + 1)} color="error">
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
      {/* <Button 
        variant="contained"></Button> */}
    </div>
  )
};

function Home() {
  return (
    <div>
      <h2> Welcome All!!!</h2>
    </div>
  )
}

function TicTacToe() {

  const [board, setBoard] = 
  // useState[0,1,2,3,4,5,6,7,8]

   useState([null, null, null, null, null, null, null, null, null,])
  
  const decideWinner = (board)=>{
const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

// if winning condition present in board then we have a winner

for(let i=0; i<lines.length; i++){

  const[a,b,c] = lines[i];

  console.log(a,b,c)
  if(board[a]!==null && board[a]===board[b]&& board[b]===board[c]){

    console.log("winner is", board[a]);
    return board[a]
  }
  // else{
  //  return board("Game Draw")
  // }
}
return null;

  };
  const winner = decideWinner(board)
const [isXturn,setIsXTurn] = useState(true);

  const handleClick = (index) => {

  // copy the board and replace with "x" in the clicked gamebox
  // update only untouched boxes  &  untill no winner
if(winner===null && board[index]===null){
    const boardCopy = [...board]

    console.log(boardCopy, index);

    boardCopy[index] = isXturn ? "X" :"O";

    setBoard(boardCopy);

    setIsXTurn(!isXturn);
}

  };

const { width, height } = useWindowSize()

  return (
    <div className="full-game">
     {winner ? <Confetti width={width} height={height}/> :""}
      <div className="board">
        {/* <h1>Game on!!!</h1> */}
        {/* we use map for the looping */}
        {/* parent componentt => child component (data has to be passed) => props */}
        {board.map((val, index) => (
          <GameBox val={val}
            onPlayerClick={() => handleClick(index)} />
        ))}

      </div>
      {winner ? <h2>Winner is :{winner}</h2> :""}
    </div>
  )
}
// changing val requries hook
function GameBox({ val, onPlayerClick }) {
  // const val="X";
  // const [val,setVal] = useState(null)
  const styles = {
    color: val === "x" ? "green" : "red"
  }

  return (
    <div
      // onClick={()=>setVal(val === "X" ? "O" : "X")} 
      onClick={() => onPlayerClick()}
      className="game-box"
      style={styles}>
      {val}</div>
  )
}
// function GameBox({val}){
//   // const val="X";
//   const styles = {
//     color : val=== "x" ? "green":"red"
//   }
//   return(
//     <div className="game-box" style={styles}>{val}</div>
//   )
// }

