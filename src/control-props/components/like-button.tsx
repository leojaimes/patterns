import { useState } from 'react';

interface Props {
  cb: (number: number) => number;
}
export function LikeButton({ cb }: Props) {
  const [likes, setLikes] = useState(0);

  const handleClick = () => setLikes(cb(likes));

  return (
    <button onClick={handleClick}>
      <span role="img" aria-label="like">
        👍
      </span>
      {likes}
    </button>
  );
}
