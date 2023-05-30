import React, { useState } from 'react';
import { ErrorBoundary } from './error-boundary';

function MyBug() {
  const [isError, setIsError] = useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error(':(');
  }

  return <button onClick={handleCrash}>Crashear la app</button>;
}

export function RenderPropsPage() {
  return (
    <>
      <h2>Render Props</h2>
      <h3>ErrorBoundary</h3>
      <ErrorBoundary>
        <MyBug />
      </ErrorBoundary>
    </>
  );
}
