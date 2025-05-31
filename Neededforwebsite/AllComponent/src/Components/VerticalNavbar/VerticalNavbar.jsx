import "./VerticalNavbar.css";
import { AiOutlineLogout } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import logo from "../../assets/react.svg";
import { Link, Links } from "react-router-dom";
function VerticalNavbar() {
    return (
        <div className="navbar-container">
            <div className="logo-container">
            <div className="logo-bar">
                <img src={logo} alt="" />
            </div>
                <span className="logo-text">Logo</span>
            </div>
            <hr/>
        <div className="vertical-navbar">
        <div className="navbar-list"><Link to="/">Dashboard</Link></div>
        <div className="navbar-list"><Link to="/LoginUser"> Our Profile</Link></div>
        <div className="navbar-list"><Link to="/Application">App</Link></div>
        <div className="navbar-list"><Link to="/myfile">File Manager</Link></div>
        <div className="navbar-list">Blog</div>
        <div className="navbar-list">About</div>
        <div className="navbar-list">Services</div>
        <div className="navbar-list">Contact</div>
        <div className="navbar-list">Home</div>
        <div className="navbar-list">About</div>
        <div className="navbar-list">Services</div>
        <div className="navbar-list">Contact</div>
        <div className="navbar-list">Contact</div>
        </div>
        <div className="navbar-list-icons">
            <div className="sign-out"><Link to="/Signup"><AiOutlineLogout/></Link></div>
            <div className="User-setting"><IoMdSettings/></div>
            <div className="feedback"><FaComment/></div>
            </div>
        </div>
    );
}
export default VerticalNavbar;