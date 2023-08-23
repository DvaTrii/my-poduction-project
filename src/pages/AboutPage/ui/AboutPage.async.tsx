import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => import('./AboutPage')));