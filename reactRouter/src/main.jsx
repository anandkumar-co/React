import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, About, ContactUS } from "./components/";
import User from "./components/User/user";
import Github, { githubinfo } from "./components/Github/Github";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUS />,
      },
      {
        path: "User/:Userid",
        element: <User />,
      },
      {
        loader: githubinfo,
        path: "github",
        element: <Github />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
