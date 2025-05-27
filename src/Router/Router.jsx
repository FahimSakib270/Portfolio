import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import AddProjects from "../Pages/AddProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutMe,
      },
      {
        path: "/add-projects",
        Component: AddProjects,
      },
    ],
  },
]);
