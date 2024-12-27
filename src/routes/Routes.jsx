import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    

    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "/dashboard/user",
      },
     
    ],
  },
]);

export default router;