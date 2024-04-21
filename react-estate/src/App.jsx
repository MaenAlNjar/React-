import "./App.css";
import HomePage from "./routes/HomePage/page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequireAuth } from "./routes/layouts/layout";
import Loign from "./routes/login/page";
import SinglePage from "./routes/singlePage/page";
import ProfilePage from "./routes/profilePage/page";
import Register from "./routes/register/page";
import ProfileUpdate from "./routes/profileUpdate/page";
import NewPostPage from "./routes/newPostPage/page";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders.js";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Loign />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
