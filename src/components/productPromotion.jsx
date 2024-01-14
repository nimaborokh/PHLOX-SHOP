import Button from "../Tool-component/button";
import promotionStyle from "../components-css/pruductPromotion.module.css";
const ProductPromotion = ({ bgcolor, h1value, imgsrc, imgwidth }) => {
    return (
        <div
            className={promotionStyle.container}
            style={{ backgroundColor: bgcolor }}
        >
            <div className={promotionStyle.left}>
                <span>20% Off</span>
                <h1>{h1value}</h1>
                <span>15 Nov To 17 Dec</span>
            </div>
            <div className={promotionStyle.right}>
                <span>Beat Solo Air</span>
                <h3>Summer Sale</h3>
                <caption>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod quae obcaecati dolorum amet placeat fugiat.
                </caption>
                <Button bgcolor="white" texcolor={bgcolor} value="Shop" />
            </div>
            <img src={imgsrc} alt="" style={{ width: imgwidth }} />
        </div>
    );
};

export default ProductPromotion;
