import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import AboutMe from "./pages/AboutMe/AboutMe.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import Technologies from "./pages/Technologies/Technologies.tsx";
import Error from "./pages/Error/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/technologies",
        element: <Technologies />,
      },
      {
        path: "/about-me",
        element: <AboutMe/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
    </RouterProvider>
  </StrictMode>,
)
