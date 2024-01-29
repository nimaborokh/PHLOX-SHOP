import { Link } from "react-router-dom";
import footerstyle from "../layout-css/footer.module.css";
const Footer = () => {
    return (
        <footer className={footerstyle.container}>
            <div className={footerstyle.phlox}>
                <h1>PHLOX</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis rerum magnam, doloremque nesciunt recusandae amet
                    porro molestias.
                </p>
                <div className={footerstyle.brands}>
                    <a
                        href="instagram"
                        className="fa-brands fa-square-instagram"
                    >
                        {" "}
                    </a>
                    <a href="linkedin" className="fa-brands fa-linkedin ">
                        {" "}
                    </a>
                    <a href="facebook" className="fa-brands fa-facebook">
                        {" "}
                    </a>
                    <a href="twitter" className="fa-brands fa-twitter">
                        {" "}
                    </a>
                </div>
            </div>
            <div className={footerstyle.links}>
                <h2>Quick Links</h2>
                <Link to="/">Home</Link>
                <Link to="/aboutUs">About</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contactUs">Contact</Link>
            </div>
            <div className={footerstyle.contants}>
                <h2>Contact</h2>
                <a href="tel:+98(0)1010000888">tel :+98 (0) 1010000 888</a>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, eligendi.
                </p>
            </div>
            <div className={footerstyle.email}>
                <h2>Subscribe To Our Email</h2>
                <h1>For Lastest News & Updates</h1>
                <form className={footerstyle.inputs}>
                    <input
                        type="email"
                        name="sub"
                        placeholder="Enter Your Email"
                    />
                    <input className={footerstyle.submit} type="submit" id="submitEmail" value="Subscribe" />
                </form>
            </div>
        </footer>
    );
};

export default Footer;
