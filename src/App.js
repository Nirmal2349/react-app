import { useState } from "react";

import "./App.css";

export default function App() {
  // const names = ["nemo", "rock", "jack"];
  const users = [
    // {
    //   name: "nemo",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXxXgL-IJd-HkjQKIU6RcawDSm8YO11f0Ww&usqp=CAU"
    // },
    // {
    //   name: "jack",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3C1TqfEFZAIzWESqgbMD8ud96aPz1PB6_hQ&usqp=CAU"
    // },
    // {
    //   name: "rock",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5svSIP5sxJ55Pav_GYjdd1LJo9IWHdnErLw&usqp=CAU"
    // }
    {
      name:"Black clover",
      image:"https://data.whicdn.com/images/342427514/original.gif"
    },{
      name:"One punch man",
      image:"https://i.pinimg.com/originals/8e/11/36/8e1136c1c39d90548e30bfb75db113e8.gif"
    },{
      name:"Haikyuu",
      image:"https://c.tenor.com/1l1pf5sZLWUAAAAC/haikyuu-jump.gif"
    },{
      name:"Demon slayer",
      image:"https://www.gifcen.com/wp-content/uploads/2021/02/demon-slayer-gif-10.gif"
    },{
      name:"Naruto",
      image:"https://i.pinimg.com/originals/6b/4c/53/6b4c53c16384d6e7fb8e8526a13a0913.gif"
    }
  ];

  return (
    <div className="App">
      {/* <h1>{name}</h1>
      <h2>its awesome</h2>
      <Hai
        name="raj"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXxXgL-IJd-HkjQKIU6RcawDSm8YO11f0Ww&usqp=CAU"
      />
      <Hai
        name="jack"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3C1TqfEFZAIzWESqgbMD8ud96aPz1PB6_hQ&usqp=CAU"
      />
      <Hai
        name="rock"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5svSIP5sxJ55Pav_GYjdd1LJo9IWHdnErLw&usqp=CAU"
      /> */}
      {users.map((usr) => (
        <Hai name={usr.name} image={usr.image} />
      ))}
      <Counter/>
    </div>
  );
}

// function New(){
//   return(
//     <div>
//       <h1>haii{name} 🤖🐱‍🏍</h1>
//       </div>
//   )
// }

function Hai({ name, image }) {
  return (
    <div className="new">
      <img src={image} alt="not supported" />
      <h1>{name}🎬</h1>
      
    </div>
  );
}

function Counter(){
  const[like,setLike]=useState(0)
  const[dislike,setdisLike]=useState(0)
  return(
    <div>
      <button onClick={()=>setLike(like+1)}>👍{like}</button>
      <button onClick={()=>setdisLike(dislike+1)}>👎{dislike}</button>
      
      
      </div>
  )
}

