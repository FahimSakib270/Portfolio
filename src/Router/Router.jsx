import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/Home/AboutMe";
import AddProjects from "../Pages/AddProjects";
import AboutDetailsMe from "../Pages/AboutDetailsMe";
import Resume from "../Pages/Resume";

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
        path: "/about-details",
        Component: AboutDetailsMe,
      },
      {
        path: "/add-projects",
        Component: AddProjects,
      },
      {
        path: "/resume",
        Component: Resume,
      },
    ],
  },
]);
