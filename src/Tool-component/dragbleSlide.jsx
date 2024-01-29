import slideStyle from "./dragbleSlide.module.css";
import ProductCard from "./productCard";
const DragbleSlide = ({
    slideName,
    img1,
    img2,
    img3,
    img4,
    img5,
    productName1,
    productName2,
    productName3,
    productName4,
    productName5,
    currentprice1,
    currentprice2,
    currentprice3,
    currentprice4,
    currentprice5,
}) => {
    return (
        <div className={slideStyle.container}>
            <h1>{slideName}</h1>
            <div className={slideStyle.cards}>
                <ProductCard
                    color="#ffffff"
                    productName={productName1}
                    imgsrc={img1}
                    Previousprice="$37.8"
                    currentprice={currentprice1}
                    off="%Off"
                />
                <ProductCard
                    color="#ffffff"
                    productName={productName2}
                    imgsrc={img2}
                    currentprice={currentprice2}
                    off="%Off"
                />
                <ProductCard
                    color="#ffffff"
                    productName={productName3}
                    imgsrc={img3}
                    currentprice={currentprice3}
                />
                <ProductCard
                    color="#ffffff"
                    productName={productName4}
                    imgsrc={img4}
                    currentprice={currentprice4}
                    off="%Off"
                />
                <ProductCard
                    color="#ffffff"
                    productName={productName5}
                    imgsrc={img5}
                    currentprice={currentprice5}
                />
            </div>
        </div>
    );
};

export default DragbleSlide;
