import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/homepage/Home";
import About from "../page/aboutpage/About";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Service from "../page/servicepage/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/services",
        element: <Service />
      },
      {
        path: "/contact-us",
        
      },
      {
        path: "/blog",
        
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
