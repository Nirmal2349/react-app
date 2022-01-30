import "./App.css";

export default function App() {
  // const names = ["nemo", "rock", "jack"];
  const users = [
    {
      name: "nemo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXxXgL-IJd-HkjQKIU6RcawDSm8YO11f0Ww&usqp=CAU"
    },
    {
      name: "jack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3C1TqfEFZAIzWESqgbMD8ud96aPz1PB6_hQ&usqp=CAU"
    },
    {
      name: "rock",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5svSIP5sxJ55Pav_GYjdd1LJo9IWHdnErLw&usqp=CAU"
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
      <h1>haiiii {name}👻👻🤖</h1>
    </div>
  );
}

