// changing val requries hook
export function GameBox({ val, onPlayerClick }) {
  // const val="X";
  // const [val,setVal] = useState(null)
  const styles = {
    color: val === "x" ? "green" : "red"
  };

  return (
    <div
      // onClick={()=>setVal(val === "X" ? "O" : "X")} 
      onClick={() => onPlayerClick()}
      className="game-box"
      style={styles}>
      {val}</div>
  );
}
