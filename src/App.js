import { Route, Routes } from "react-router-dom";
import Navbar from "./layout-components/navbar";
import Home from "./layout-components/home";
import Shop from "./layout-components/shop";
import ContactUs from "./layout-components/contactUs";
import AboutUs from "./layout-components/aboutUs";
import Login from "./layout-components/login";

function App() {
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
