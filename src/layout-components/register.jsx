import loginstyle from "../layout-css/login.module.css";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className={loginstyle.Register}>
            <div className={loginstyle.name}>
                <div className={loginstyle.left}>
                    <span>First Name</span>
                    <input type="text" />
                </div>
                <div className={loginstyle.right}>
                    <span>Last Name</span>
                    <input type="text" />
                </div>
            </div>
            <span>Pleas Enter Your Email.</span>
            <input type="email" autoFocus required />
            <span>Pleas Enter Your Password</span>
            <input type="password" required />
            <p></p>
            <button>Login</button>
            <strong>
                Your entry means acceptance of
                <Link> PHLOX conditions</Link> and
                <Link> privacy rules</Link>
            </strong>
        </div>
    );
};

export default Register;
