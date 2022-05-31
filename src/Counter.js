import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';




export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);

const incrementlike = () => setLike(like + 1);
const incrementdislike = () => setdisLike(disLike + 1);
  return (
    <div className="counter-container">
      {/* <button >👍{like}</button> */}
      <IconButton
        aria-label="like button"
        className="like-dislike"
        onClick={incrementlike}
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      {/* <Button className="like-dislike" onClick={() => setLike(like + 1)}
              variant="contained"></Button> */}

      {/* <button >{dislike}</button> */}
      <IconButton
        aria-label="dislike button"
        className="like-dislike"
        onClick={incrementdislike}
        color="error"
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
      {/* <Button
              variant="contained"></Button> */}
    </div>
  );
}
;
