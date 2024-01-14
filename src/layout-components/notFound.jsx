import notFoundstyle from "../layout-css/notFound.module.css";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className={notFoundstyle.container}>
            404 Not Found 😩
            <span>Back To Home</span>
            <Link to="/">Home</Link>
        </div>
    );
};

export default NotFound;
