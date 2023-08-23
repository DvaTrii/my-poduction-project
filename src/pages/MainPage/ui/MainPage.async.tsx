import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() =>import('./MainPage')));