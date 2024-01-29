import ShopCategory from "../components/shopCatrgory";
import Navbar from "./navbar";
import shopstyle from "../layout-css/shop.module.css";
import container from "../layout-css/containerBox.module.css";
import DragbleSlide from "../Tool-component/dragbleSlide";
import Footer from "./footer";

const Shop = () => {
    return (
        <div className={shopstyle.container}>
            <Navbar />
            <div
                className={container.containerBox}
                style={{ flexDirection: "column" }}
            >
                <header>
                    <ShopCategory />
                </header>
                <main style={{ width: "100%" }}>
                    <DragbleSlide
                        slideName="Earphones"
                        img1="img/headphon2.png"
                        img2="img/headphon2.png"
                        img3="img/headphon2.png"
                        img4="img/headphon2.png"
                        img5="img/headphon2.png"
                        productName1="s21 oltra"
                        productName2="s21 oltra"
                        productName3="s21 oltra"
                        productName4="s21 oltra"
                        productName5="s21 oltra"
                        currentprice1="$29.9"
                        currentprice2="$29.9"
                        currentprice3="$29.9"
                        currentprice4="$29.9"
                        currentprice5="$29.9"
                    />
                    <DragbleSlide
                        slideName="Watch"
                        img1="img/headphon2.png"
                        img2="img/headphon2.png"
                        img3="img/headphon2.png"
                        img4="img/headphon2.png"
                        img5="img/headphon2.png"
                        productName1="s21 oltra"
                        productName2="s21 oltra"
                        productName3="s21 oltra"
                        productName4="s21 oltra"
                        productName5="s21 oltra"
                        currentprice1="$29.9"
                        currentprice2="$29.9"
                        currentprice3="$29.9"
                        currentprice4="$29.9"
                        currentprice5="$29.9"
                    />
                    <DragbleSlide
                        slideName="Lap Top"
                        img1="img/headphon2.png"
                        img2="img/headphon2.png"
                        img3="img/headphon2.png"
                        img4="img/headphon2.png"
                        img5="img/headphon2.png"
                        productName1="s21 oltra"
                        productName2="s21 oltra"
                        productName3="s21 oltra"
                        productName4="s21 oltra"
                        productName5="s21 oltra"
                        currentprice1="$29.9"
                        currentprice2="$29.9"
                        currentprice3="$29.9"
                        currentprice4="$29.9"
                        currentprice5="$29.9"
                    />
                    <DragbleSlide
                        slideName="ConSole"
                        img1="img/headphon2.png"
                        img2="img/headphon2.png"
                        img3="img/headphon2.png"
                        img4="img/headphon2.png"
                        img5="img/headphon2.png"
                        productName1="s21 oltra"
                        productName2="s21 oltra"
                        productName3="s21 oltra"
                        productName4="s21 oltra"
                        productName5="s21 oltra"
                        currentprice1="$29.9"
                        currentprice2="$29.9"
                        currentprice3="$29.9"
                        currentprice4="$29.9"
                        currentprice5="$29.9"
                    />
                    <DragbleSlide
                        slideName="Oculus"
                        img1="img/headphon2.png"
                        img2="img/headphon2.png"
                        img3="img/headphon2.png"
                        img4="img/headphon2.png"
                        img5="img/headphon2.png"
                        productName1="s21 oltra"
                        productName2="s21 oltra"
                        productName3="s21 oltra"
                        productName4="s21 oltra"
                        productName5="s21 oltra"
                        currentprice1="$29.9"
                        currentprice2="$29.9"
                        currentprice3="$29.9"
                        currentprice4="$29.9"
                        currentprice5="$29.9"
                    />
                    <DragbleSlide
                        slideName="Speaker"
                        img1="img/headphon2.png"
                        img2="img/headphon2.png"
                        img3="img/headphon2.png"
                        img4="img/headphon2.png"
                        img5="img/headphon2.png"
                        productName1="s21 oltra"
                        productName2="s21 oltra"
                        productName3="s21 oltra"
                        productName4="s21 oltra"
                        productName5="s21 oltra"
                        currentprice1="$29.9"
                        currentprice2="$29.9"
                        currentprice3="$29.9"
                        currentprice4="$29.9"
                        currentprice5="$29.9"
                    />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default Shop;
