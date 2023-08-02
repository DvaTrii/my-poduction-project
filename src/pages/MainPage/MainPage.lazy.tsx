import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() =>import('./MainPage')));