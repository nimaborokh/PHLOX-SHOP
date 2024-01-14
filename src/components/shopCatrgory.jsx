import Button from "../Tool-component/button";
import ShopCstyle from "../components-css/shopCategory.module.css";
const ShopCategory = () => {
    return (
        <div className={ShopCstyle.dadContainer}>
            <div className={ShopCstyle.container}>
                <div className={ShopCstyle.left1}>
                    <div className={ShopCstyle.up}>
                        <div className={ShopCstyle.left2}>
                            <span>Enjoy</span>
                            <h2>With</h2>
                            <h1>EARPHONE</h1>
                            <Button
                                value="Browse"
                                bgcolor="red"
                                texcolor="white"
                                fsize="1vw"
                            />
                            <img
                                src="img/kisspng-microphone-headphones-in-ear-monitor-hearing-aid-5af91c9813ec51.2165024315262752240816.png"
                                alt=""
                            />
                        </div>
                        <div className={ShopCstyle.right2}>
                            <span>New</span>
                            <h2>Watch</h2>
                            <h1>GALEXY</h1>
                            <Button
                                value="Browse"
                                bgcolor="white"
                                texcolor="#fdc62e"
                                fsize="1vw"
                            />
                            <img src="img/watch.png" alt="" />
                        </div>
                    </div>
                    <div className={ShopCstyle.bottom}>
                        <span>Best</span>
                        <h2>Gaming</h2>
                        <h1>CONSOLE</h1>
                        <Button
                            value="Browse"
                            bgcolor="red"
                            texcolor="white"
                            fsize="1vw"
                        />
                        <img src="img/ps5.png" alt="" />
                    </div>
                </div>
                <div className={ShopCstyle.right1}>
                    <div className={ShopCstyle.up}>
                        <span>Teand</span>
                        <h2>Devices</h2>
                        <h1>LAPTOP</h1>
                        <Button
                            value="Browse"
                            bgcolor="white"
                            texcolor="red"
                            fsize="1vw"
                        />
                        <img src="img/laptop-png-6765.png" alt="laptop" />
                    </div>
                    <div className={ShopCstyle.bottom}>
                        <div className={ShopCstyle.left2}>
                            <span>Play</span>
                            <h2>Game</h2>
                            <h1>OCULUS</h1>
                            <Button
                                value="Browse"
                                bgcolor="white"
                                texcolor="#2cd06f"
                                fsize="1vw"
                            />
                            <img src="img/oculus.png" alt="" />
                        </div>
                        <div className={ShopCstyle.right2}>
                            <span>New</span>
                            <h2>Amazon</h2>
                            <h1>SPEAKER</h1>
                            <Button
                                value="Browse"
                                bgcolor="white"
                                texcolor="#1779fe"
                                fsize="1vw"
                            />
                            <img src="img/speaker.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <section className={ShopCstyle.option}>
                <div className={ShopCstyle.items}>
                    <i className="fa-solid fa-truck-fast"></i>
                    <div>
                        <h5>Free Shipping</h5>
                        <span>Free Shipping On All Order</span>
                    </div>
                </div>
                <div className={ShopCstyle.items}>
                    <i className="fa-regular fa-circle-check"></i>
                    <div>
                        <h5>Money Guarantee</h5>
                        <span>30 Day Money Back</span>
                    </div>
                </div>
                <div className={ShopCstyle.items}>
                    <i className="fa-solid fa-headphones-simple"></i>
                    <div>
                        <h5>Online Support 24/7</h5>
                        <span>Technical Support 24/7</span>
                    </div>
                </div>
                <div className={ShopCstyle.items}>
                    <i className="fa-solid fa-money-check"></i>
                    <div>
                        <h5>Seacure Payment</h5>
                        <span>All Cards Accepted</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopCategory;
