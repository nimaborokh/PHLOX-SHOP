import { NavLink } from "react-router-dom";
import { useRef } from "react";
import container from "../layout-css/containerBox.module.css";
import navbar from "../layout-css/navbar.module.css";
const Navbar = () => {
    let menuDiv = useRef();
    function menuMobail() {
        if (menuDiv.current.style.display === "none") {
            menuDiv.current.style.display = "flex";
        } else {
            menuDiv.current.style.display = "none";
        }
    }
    return (
        <div>
            <div className={container.containerBox}>
                <div className={navbar.navItemLeft}>
                    <h3>PHLOX</h3>
                    <ul className={navbar.item}>
                        <li>
                            <NavLink to="/" aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutUs">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactUs">Contact Us</NavLink>
                        </li>
                    </ul>
                    <div className={navbar.menu}>
                        <button
                            className={`fa fa-bars`}
                            onClick={menuMobail}
                        ></button>
                        Menu
                    </div>
                </div>
                <div className={navbar.navItemRight}>
                    <ul>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={navbar.menuMobail}
                style={{ display: "none" }}
                ref={menuDiv}
            >
                <ul>
                    <li>
                        <NavLink to="/" aria-current="page">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutUs">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactUs">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
