import React, { useState } from 'react';
import { ErrorBoundary } from './error-boundary';
import { FinalErrorBoundary } from './final-error-boundary';

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
      <hr />
      <FinalErrorBoundary
        render={(error) => (
          <p>
            Oh no desde render props Ups D: <code>{error?.message}</code>
          </p>
        )}
      >
        <MyBug />
      </FinalErrorBoundary>

      <FinalErrorBoundary>
        <MyBug />
      </FinalErrorBoundary>
    </>
  );
}
