import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";

export function AddColor() {
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
  );
}
;
