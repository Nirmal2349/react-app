import { useState } from "react";

import "./App.css";

export default function App() {
  // const names = ["nemo", "rock", "jack"];
  const users = [
    {
      name:"Black clover",
      summary:"Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus.",
      rating:"9.4/10",
      image:"https://data.whicdn.com/images/342427514/original.gif"
    },{
      name:"One punch man",
      summary:"One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch",
      rating:"8/10",
      image:"https://i.pinimg.com/originals/8e/11/36/8e1136c1c39d90548e30bfb75db113e8.gif"
    },{
      name:"Haikyuu",
      summary:"Based on Haruichi Furudate's popular shounen manga of the same name, Haikyuu!! is an exhilarating and emotional sports comedy following two determined athletes as they attempt to patch a heated rivalry in order",
      rating:"9/10",
      image:"https://c.tenor.com/1l1pf5sZLWUAAAAC/haikyuu-jump.gif"
    },{
      name:"Demon slayer",
      summary:"A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister",
      rating:"9/10",
      image:"https://www.gifcen.com/wp-content/uploads/2021/02/demon-slayer-gif-10.gif"
    },{
      name:"Naruto",
      summary:"This show first grabbed my attention when I saw clips of it in the game for the Xbox 360 called `Naruto: Rise of a Ninja` After I played that game I just had to watch the show and I am glad I did as it turned out to be a very fun and complete show",
      rating:"9.5/10",
      image:"https://i.pinimg.com/originals/6b/4c/53/6b4c53c16384d6e7fb8e8526a13a0913.gif"
    }
  ];
  
  

  const[name,setName]=useState("")
  const[poster,setPoster]=useState("")
  const[rating,setRating]=useState("")
  const[summary,setSummary]=useState("")

  return (
    <div className="App">
      <div className="add-movie-form">
        <input type="text" placeholder="Name"
         onChange={(event)=>setName(event.target.value)}/>

        <input type="text" placeholder="Poster" 
        onChange={(event)=>setPoster(event.target.value)}/>
        
        <input type="text" placeholder="Rating" 
        onChange={(event)=>setRating(event.target.value)}/>

        <input type="text" placeholder="Summary" 
        onChange={(event)=>setSummary(event.target.value)}/>

        

        <button onClick={()=>{
          const newMovie={
            name:name,
            poster:poster,
            rating:rating,
            summary:summary,
          };
          setMovieList([...movieList,newMovie])
        }
        }>addmovie</button>
      </div>
   
      <Counter/>
      <AddColor/>
      <div className="movie-list">
        </div>
    </div>
  );
}


function Movie({ name, image, summary, rating}) {
  const styles = {
    color: rating> 8 ? "green" :"red" ,
  };

  
  return (
    <div className="new">
      <div className="movie-container">
      <img src={image} alt="not supported" className="movie-poster" />
      <div className="movie-specs">
      <h1 className="movie-name">{name}</h1>
      <p style={styles} className="movie-rating">⭐{rating}</p>
      </div>
      <Counter/>
      <p className="movie-summary">{summary}</p>
      </div>
    </div>
  );
}

function Counter(){
  const[like,setLike]=useState(0)
  const[dislike,setdisLike]=useState(0)
  return(
    <div className="counter-container">
      <button className="like-dislike" onClick={()=>setLike(like+1)}>👍{like}</button>
      <button className="like-dislike" onClick={()=>setdisLike(dislike+1)}>👎{dislike}</button>
      </div>
  )
}

function AddColor(){
  const [color,setColor]=useState("pink");
 const styles={
   background:color,
 };
 const colorList = ["crimson","red","blue","orange"];
  return(
    <div>
      <input value={color}
       style={styles}
       onChange={(event)=>setColor(event.target.value)} placeholder="Enter a color"/>
    <button onClick={()=>setColorList([...colorList,color])}>Add color</button>
    {colorList.map((clr)=>(
    <ColorBox color={clr}/>
    ))}
    </div>
  )
}

function ColorBox({color}){
  const styles={
    backgroundColor:color,
    height:"25px",
    width:"200px",
    marginTop:"10px",
  };
return <div style={styles}></div>
}

