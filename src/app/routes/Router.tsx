import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@app-pages/Main';

export const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);
