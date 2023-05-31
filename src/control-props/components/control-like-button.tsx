import { useState } from 'react';

interface Props {
  value: number;
  setValue: () => void;
}
export function ControlLikeButton({ value, setValue }: Props) {
  return (
    <button onClick={setValue}>
      <span role="img" aria-label="like">
        👍
      </span>
      {value}
    </button>
  );
}
