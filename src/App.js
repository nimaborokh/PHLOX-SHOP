import { Route, Routes } from "react-router-dom";
import Home from "./layout-components/home";
import Shop from "./layout-components/shop";
import ContactUs from "./layout-components/contactUs";
import AboutUs from "./layout-components/aboutUs";
import Login from "./layout-components/login";
import NotFound from "./layout-components/notFound";
import Register from "./layout-components/register";

function App() {
    return (
        <div>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/login" element={<Login />}>
                    <Route path="Register" element={<Register />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
