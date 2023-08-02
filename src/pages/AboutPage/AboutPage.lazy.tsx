import { lazy } from 'react';

export const AboutPageLazy = lazy(() => new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => import('./AboutPage')));