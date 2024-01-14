import { Link } from "react-router-dom";

const Button = ({ value, bgcolor, texcolor, fsize, toWher }) => {
    return (
        <Link
            style={{
                backgroundColor: bgcolor,
                color: texcolor,
                fontSize: fsize,
                borderRadius: "60px",
                padding: "0.8vw 2vw",
                width: "fit-content",
                border: "none",
                cursor: "pointer",
                boxSizing: "border-box",
                transition: "0.3s",
                textDecoration: "none",
            }}
            to={toWher}
        >
            {value}
        </Link>
    );
};

export default Button;
