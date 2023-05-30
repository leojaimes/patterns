import React from 'react';
import { MyFormAControlled } from './form-with-hoc';

export function HocPage() {
  return (
    <>
      <h2>High Order Component (HOC)</h2>
      <p>Sigue las instrucciones que vienen en el curso.</p>
      <MyFormAControlled
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    </>
  );
}
