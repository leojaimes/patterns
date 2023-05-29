import React from 'react';
import { CustomHookFetchData } from './custom-hook-fetch-data';

const apiBaseUrl = 'https://api.github.com';
const url = `${apiBaseUrl}/orgs/Developero-oficial/repos?sort=created`;

export function CustomHookPage() {
  return (
    <>
      <h2>Custom Hook</h2>
      <p>Sigue las instrucciones que vienen en el curso.</p>
      <CustomHookFetchData url={url} />
    </>
  );
}
