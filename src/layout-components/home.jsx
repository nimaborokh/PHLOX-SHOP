import Baner from "../components/baner";
import BestSeller from "../components/bestSeller";
import News from "../components/news";
import ProductPromotion from "../components/productPromotion";
import ShopCategory from "../components/shopCatrgory";
import Sponser from "../components/sponser";
import container from "../layout-css/containerBox.module.css";
import Footer from "./footer";
import Navbar from "./navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div
                className={container.containerBox}
                style={{ display: "flex", flexDirection: "column" }}
            >
                <Baner />
                <ShopCategory />
                <ProductPromotion
                    imgsrc="img/headphon2.png"
                    h1value="FIND SMILE"
                    bgcolor="red"
                />
                <BestSeller />
                <ProductPromotion
                    imgsrc="img/watch2.png"
                    imgwidth="20vw"
                    h1value="HAPPY HOURS"
                    bgcolor="#2cd06f"
                />
                <News />
            </div>
            <Sponser />
            <div
                className={container.containerBox}
                style={{ display: "flex", flexDirection: "column" }}
            >
                <Footer />
            </div>
        </div>
    );
};

export default Home;
