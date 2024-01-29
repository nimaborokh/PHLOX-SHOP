import { useRef } from "react";
import newsstyle from "../components-css/news.module.css";
const News = () => {
    const cards = useRef();
    let event = false;
    let arr = [];
    function move(e) {
        if (event) {
            if (arr.length == 1) {
                let newArr = e.clientX - arr[0];
                arr.length = 0;
                cards.current.scrollLeft += -newArr;
            } else {
                arr.push(e.clientX);
            }
        }
    }
    function move2() {
        if (event) {
            event = false;
        } else {
            event = true;
        }
    }
    function move3() {
        arr.length = 0;
        event = false;
    }
    function moveLeft(e) {
        let arr = 0;
        let animateMov = setInterval(() => {
            if (arr === 300) {
                clearInterval(animateMov);
            } else {
                cards.current.scrollLeft -= 10;
                arr += 10;
            }
        }, 10);
    }
    function moveRight(e) {
        let arr = 0;
        let animateMov = setInterval(() => {
            if (arr === 300) {
                clearInterval(animateMov);
            } else {
                cards.current.scrollLeft += 10;
                arr += 10;
            }
        }, 10);
    }
    return (
        <div className={newsstyle.container}>
            <i className="fa-solid fa-angle-left" onClick={moveLeft}></i>
            <h1>Resent News</h1>
            <span className={newsstyle.span}>
                Ther are many variations passages
            </span>
            <div
                className={newsstyle.cards}
                onMouseDown={move2}
                onMouseMove={move}
                onMouseUp={move3}
                onMouseLeave={move3}
                ref={cards}
            >
                <div className={newsstyle.card}>
                    <img src="img/new1.webp" alt="" draggable="false" />
                    <div className={newsstyle.contents}>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae id similique nostrum et ipsum ad fugiat
                            eius nemo, amet architecto? Reiciendis quasi
                            aperiam.
                        </p>
                    </div>
                </div>
                <div className={newsstyle.card}>
                    <img src="img/new2.jpg" alt="" draggable="false" />
                    <div className={newsstyle.contents}>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae id similique nostrum et ipsum ad fugiat
                            eius nemo, amet architecto? Reiciendis quasi
                            aperiam.
                        </p>
                    </div>
                </div>
                <div className={newsstyle.card}>
                    <img src="img/new3jpg.jpg" alt="" draggable="false" />
                    <div className={newsstyle.contents}>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae id similique nostrum et ipsum ad fugiat
                            eius nemo, amet architecto? Reiciendis quasi
                            aperiam.
                        </p>
                    </div>
                </div>
                <div className={newsstyle.card}>
                    <img src="img/new4.jpg" alt="" draggable="false" />
                    <div className={newsstyle.contents}>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae id similique nostrum et ipsum ad fugiat
                            eius nemo, amet architecto? Reiciendis quasi
                            aperiam.
                        </p>
                    </div>
                </div>
                <div className={newsstyle.card}>
                    <img src="img/new5.jpg" alt="" draggable="false" />
                    <div className={newsstyle.contents}>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae id similique nostrum et ipsum ad fugiat
                            eius nemo, amet architecto? Reiciendis quasi
                            aperiam.
                        </p>
                    </div>
                </div>
                <div className={newsstyle.card}>
                    <img src="img/new5.jpg" alt="" draggable="false" />
                    <div className={newsstyle.contents}>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae id similique nostrum et ipsum ad fugiat
                            eius nemo, amet architecto? Reiciendis quasi
                            aperiam.
                        </p>
                    </div>
                </div>
            </div>
            <i className="fa-solid fa-angle-right" onClick={moveRight}></i>
        </div>
    );
};

export default News;
