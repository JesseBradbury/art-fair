import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Artists from "./pages/Artists";
import SingleProduct from "./pages/SingleProduct";
import SingleArtist from "./pages/SingleArtist";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {},
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/artists/:id",
        element: <SingleArtist />,
      },
  {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profiles/:username",
        element: <Profile />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
