import { Link } from "react-router-dom";
import productCardstyle from "../Tool-component/productCard.module.css";
const ProductCard = ({
    off,
    imgsrc,
    productName,
    Previousprice,
    currentprice,
    color,
}) => {
    return (
        <div className={productCardstyle.container}>
            <Link className={productCardstyle.imgcard}>
                {off ? <span>{off}</span> : null}
                <img src={imgsrc} alt="" />
            </Link>
            <span style={{ color: color }}>{productName}</span>
            <div style={{ color: color }} className={productCardstyle.price}>
                {off ? <del>{Previousprice}</del> : null}
                <ins style={{ color: color }}>{currentprice}</ins>
            </div>
        </div>
    );
};

export default ProductCard;
