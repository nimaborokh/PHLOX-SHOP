import ProductCard from "../Tool-component/productCard";
import bestSellerstyle from "../components-css/bestSeller.module.css";
const BestSeller = () => {
    return (
        <div className={bestSellerstyle.container}>
            <h1>Best Seller Products</h1>
            <span>speaker Ther Are Many Variations passages</span>
            <div className={bestSellerstyle.products}>
                <ProductCard
                    productName="Beats"
                    imgsrc="img/headphon2.png"
                    currentprice="$995"
                    off="% Off"
                    Previousprice="$1200"
                />
                <ProductCard
                    productName="Beats"
                    imgsrc="img/headphon2.png"
                    currentprice="$995"
                    off="% Off"
                    Previousprice="$1200"
                />
                <ProductCard
                    productName="Beats"
                    imgsrc="img/headphon2.png"
                    currentprice="$995"
                    Previousprice="$1200"
                />
                <ProductCard
                    productName="Beats"
                    imgsrc="img/headphon2.png"
                    currentprice="$995"
                    off="% Off"
                    Previousprice="$1200"
                />
                <ProductCard
                    productName="Beats"
                    imgsrc="img/headphon2.png"
                    currentprice="$995"
                    off="% Off"
                    Previousprice="$1200"
                />
                <ProductCard
                    productName="Beats"
                    imgsrc="img/headphon2.png"
                    currentprice="$995"
                    off="% Off"
                    Previousprice="$1200"
                />
                <ProductCard
                    productName="Beats"
                    imgsrc="img/headphon2.png"
                    currentprice="$995"
                    off="% Off"
                    Previousprice="$1200"
                />
                <ProductCard
                    productName="Beats"
                    imgsrc="img/headphon2.png"
                    currentprice="$995"
                    off="% Off"
                    Previousprice="$1200"
                />
            </div>
        </div>
    );
};

export default BestSeller;
