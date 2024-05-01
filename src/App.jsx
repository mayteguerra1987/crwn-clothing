import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { HomePage, HatsPage } from './pages';
import './pages/homepage/homepage.styles.scss'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/hat",
    element: <HatsPage/>,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
