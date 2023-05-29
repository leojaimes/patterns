import { Typography } from '@mui/material';
import React from 'react';

export function WelcomePage() {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        ¡Hola Mundo!
      </Typography>

      <Typography variant="h4" component="h2">
        Esta aplicación forma parte del curso Guía definitiva: Aprende los 9
        Patrones Avanzados en ReactJS
      </Typography>
    </>
  );
}
