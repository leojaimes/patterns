import React from 'react';
import { LikeButton } from './like-button';

export function ControlPropsPage() {
  return (
    <>
      <h2>Control Props</h2>
      <p>Sigue las instrucciones que vienen en el curso.</p>
      <LikeButton
        cb={(number) => {
          return number + 1;
        }}
      />
    </>
  );
}
