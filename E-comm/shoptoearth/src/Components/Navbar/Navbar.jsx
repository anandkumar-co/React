import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("Shop");
  function changePage(value) {
    setMenu(value);
  }
  return (
    <>
      <div className="navbar   shadow-xl flex w-full flex-wrap items-center justify-around px-3">
        <div className="ms-2">
          <Link to="/">
            <img src={logo}></img>
            <p>shopper</p>
          </Link>
        </div>

        <div className="mt-2  items-center flex justify-around list-style-none">
          <li
            class="my-4 ps-2 mb-0 pe-1 ps-0"
            onClick={() => changePage("Shop")}
          >
            <Link to="/">Shop</Link>
            {menu === "Shop" ? <hr></hr> : <></>}
          </li>

          <li class="my-4 ps-2 " onClick={() => changePage("Men")}>
            <Link to="/Men">Men</Link>
            {menu === "Men" ? <hr></hr> : <></>}
          </li>

          <li class="my-4 ps-2 " onClick={() => changePage("Women")}>
            <Link to="/Women">Women</Link>
            {menu === "Women" ? <hr></hr> : <></>}
          </li>
          <li
            class="my-4 ps-2 mb-0 pe-1 ps-0"
            onClick={() => changePage("Kids")}
          >
            <Link to="/Kids">Kids</Link>
            {menu === "Kids" ? <hr></hr> : <></>}
          </li>
        </div>
        <div className="nav-login-cart flex  justify-between gap-2">
          <button className="button rounded-xl border px-3 py-2 ">
            <Link to="/Login">Login</Link>
          </button>
          <div>
            <Link to="/Cart">
              <img src={cart} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
