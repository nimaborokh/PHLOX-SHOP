import Button from "../Tool-component/button";
import baner from "../components-css/baner.module.css";
const Baner = () => {
    return (
        <div className={baner.baner}>
            <div className={baner.item}>
                <h3>Beat Solo</h3>
                <h2>Wireless</h2>
                <h1>HEADPHONE</h1>
                <img
                    src="img/—Pngtree—headphones commercial element_4086861.png"
                    alt=""
                />

                <Button
                    value="Shop By Category"
                    bgcolor="red"
                    fsize="0.9vw"
                    texcolor="#ffffff"
                />
                <span>Description</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officia vero distinctio sint at, veniam impedit, sed
                    optio fugiat cum nulla labore molestiae porro.
                </p>
            </div>
        </div>
    );
};

export default Baner;
