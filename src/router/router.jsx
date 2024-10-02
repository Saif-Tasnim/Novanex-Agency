import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/homepage/Home";
import About from "../page/aboutpage/About";
import ErrorPage from "../component/ErrorPage/ErrorPage";

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
    ],
    errorElement: <ErrorPage/>
  },
]);
