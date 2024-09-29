import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../page/homepage/Home'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{
      path:"",
      element: <Home/>
    }],
  },
]);
