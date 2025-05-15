import Navbar from "./Components/Navbar/Navbar";
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Product from "./Pages/Product";
// import { Children } from "react";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const router=createBrowserRouter([
    {
    path:'/',
    element:<Layout/>,
    children :[
    {
      path:"/" ,
      element:<Shop />,

    },
    {
      path:"/Men" ,
      element:<ShopCategory banner={men_banner} category="men" />,

    },
    {
      path:"/Women" ,
      element:<ShopCategory banner={women_banner} category="women" />,

    },
    {
      path:"/Kids" ,
      element:<ShopCategory banner={kid_banner} category="kid" />,

    },
    {
      path:"/Login" ,
      element:<LoginSignup />,

    },
    {
      path:"/Cart" ,
      element:<Cart />,

    },
    {
      path:"/product/:productId" ,
      element:<Product />,

    },
  ],
},
]);
  return <RouterProvider router={router}/>
}

export default App;
