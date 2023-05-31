import React, { useState } from 'react';
import { LikeButton } from './like-button';
import { ControlLikeButton } from './control-like-button';

export function ControlPropsPage() {
  const [likes, setLikes] = useState(0);
  const handleCounter = () => {
    setLikes(likes + 1);
  };
  return (
    <>
      <h2>Control Props</h2>
      <p>LikeButtons</p>
      <LikeButton
        cb={(number) => {
          return number + 1;
        }}
      />
      <p>ControlLikeButton.</p>
      <ControlLikeButton value={likes} setValue={handleCounter} />
    </>
  );
}
