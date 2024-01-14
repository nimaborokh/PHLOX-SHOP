import { Link } from "react-router-dom";
import productCardstyle from "../Tool-component/productCard.module.css";
const ProductCard = ({
    off,
    imgsrc,
    productName,
    Previousprice,
    currentprice,
}) => {
    return (
        <div className={productCardstyle.container}>
            <Link className={productCardstyle.imgcard}>
                {off ? <span>{off}</span> : null}
                <img src={imgsrc} alt="" />
            </Link>
            <span>{productName}</span>
            <div className={productCardstyle.price}>
                {off ? <del>{Previousprice}</del> : null}
                <ins>{currentprice}</ins>
            </div>
        </div>
    );
};

export default ProductCard;
