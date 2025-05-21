import VerticalNavbar from "./Components/VerticalNavbar/VerticalNavbar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import OurProfile from "./Pages/OurProfile";
import "./App.css";
import LoginUser from "./Pages/LoginUser";
import Signup from "./Components/SignUp/Signup";
function Layout() {
  return (
    <div className="app-container">      
      <VerticalNavbar />  
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
function App() {
    const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children:[
      {
        path:"/",
        element:<Dashboard />,
      },     
      {
        path:"/OurProfile",
        element:<OurProfile />,
      },     
      {
        path:"/LoginUser",
        element:<LoginUser />,
      },     
 
      {
        path:"/Signup",
        element:<Signup />,
      },     
    ]
    },
  ]);
   return <RouterProvider router={router} />
}

export default App
