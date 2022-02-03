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


import "./App.css";

export default function App() {
  const Initial_Movie_List = [
    {
      name: "Black clover",
      summary: "Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus.",
      rating: "9.4/10",
      poster: "https://data.whicdn.com/images/342427514/original.gif"
    }, {
      name: "One punch man",
      summary: "One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch",
      rating: "8/10",
      poster: "https://i.pinimg.com/originals/8e/11/36/8e1136c1c39d90548e30bfb75db113e8.gif"
    }, {
      name: "Haikyuu",
      summary: "Based on Haruichi Furudate's popular shounen manga of the same name, Haikyuu!! is an exhilarating and emotional sports comedy following two determined athletes as they attempt to patch a heated rivalry in order",
      rating: "9/10",
      poster: "https://c.tenor.com/1l1pf5sZLWUAAAAC/haikyuu-jump.gif"
    }, {
      name: "Demon slayer",
      summary: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister",
      rating: "9/10",
      poster: "https://www.gifcen.com/wp-content/uploads/2021/02/demon-slayer-gif-10.gif"
    }, {
      name: "Naruto",
      summary: "This show first grabbed my attention when I saw clips of it in the game for the Xbox 360 called `Naruto: Rise of a Ninja` After I played that game I just had to watch the show and I am glad I did as it turned out to be a very fun and complete show",
      rating: "9.5/10",
      poster: "https://i.pinimg.com/originals/6b/4c/53/6b4c53c16384d6e7fb8e8526a13a0913.gif"
    }
  ];

  const [movieList, setMovieList] = useState(Initial_Movie_List)


  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState("")
  const [summary, setSummary] = useState("")

  return (
    <div className="App">
      <div className="add-movie-form">

        <TextField onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="outlined" />

        {/* <input type="text" placeholder="Name"
           /> */}

        <TextField onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="outlined" />

        {/* <input type="text" placeholder="Poster"
           /> */}

        <TextField onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="outlined" />

        {/* <input type="text" placeholder="Rating"
           /> */}
        <TextField onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="outlined" />

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
      <div className="movie-list">
        {Initial_Movie_List.map(({ name, poster, rating, summary }, index) => (
          <Movie
            key={index}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />
        ))}

      </div>
      <AddColor />
      {/* <Counter /> */}
    </div>

  );
};



function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["crimson", "red", "blue", "orange"]);
  return (
    <div>
      {/* <input 
      value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)} placeholder="Enter a color" /> */}

      <TextField value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        label="Enter a color"
        variant="outlined" />

      {/* <button ></button> */}
      <Button onClick={() => setColorList([...colorList, color])} variant="contained">Add color</Button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  )
};

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
};

function Movie({ name, poster, summary, rating }) {
  const styles = {
    color: rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const summaryStyles = {
    display: show ? "block" : "none",
  }
  return (
    // <div className="new">
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
    // </div>
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




