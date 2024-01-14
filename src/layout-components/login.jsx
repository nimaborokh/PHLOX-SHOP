import { Link, Outlet } from "react-router-dom";
import loginstyle from "../layout-css/login.module.css";
import { useState } from "react";
const Login = () => {
    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => value + 1);
    }

    const forc = useForceUpdate();
    return (
        <div className={loginstyle.container}>
            <form action="">
                <h1>PHLOX</h1>
                <div className={loginstyle.items}>
                    <h2>
                        <Link to="/login" onClick={forc}>Login</Link> |{" "}
                        <Link to="/login/Register" onClick={forc}>
                            Sign Up
                        </Link>
                    </h2>
                    {window.location.pathname === "/login/Register" ? (
                        <Outlet />
                    ) : (
                        <div className={loginstyle.login}>
                            <span>
                                Hello! <br />
                                Pleas Enter Your Email.
                            </span>
                            <input type="email" autoFocus required />
                            <span>Pleas Enter Your Password</span>
                            <input type="password" required />
                            <p></p>
                            <button>Login</button>
                            <strong>
                                Your entry means acceptance of
                                <Link>PHLOX conditions</Link> and
                                <Link> privacy rules</Link>
                            </strong>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;
