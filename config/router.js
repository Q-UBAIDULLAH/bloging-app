import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashboard from "../views/Dashboard";
  import Aboutus from "../views/AboutUs";
  import ContactUs from "../views/ContactUs";
  import Detail from "../views/Detail";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Dashboard/>
    },
    {
      path: "/cu",
      element:<ContactUs/>
    },
    {
      path: "/au",
      element:<Aboutus/>
    },
    
    {
      path: "/detail/:adid",
      element:<Detail/>
    },
    
 
   
  ]);
  function Router(){
    return <RouterProvider router={router} />
  }
  export default Router;