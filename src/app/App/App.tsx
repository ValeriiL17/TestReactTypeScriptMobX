import { RouterProvider } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import { browserRouter } from '../routes';

export const App = observer(() => {
  return <RouterProvider router={browserRouter} />;
});
