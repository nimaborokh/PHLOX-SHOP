import newsstyle from "../components-css/news.module.css";
const News = () => {
    return (
        <div className={newsstyle.container}>
            <h1>Resent News</h1>
            <span className={newsstyle.span}>Ther are many variations passages</span>
            <div className={newsstyle.cards}>
                <div className={newsstyle.card}>
                    <img src="img/new1.webp" alt="" />
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
                </div><div className={newsstyle.card}>
                    <img src="img/new2.jpg" alt="" />
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
                </div><div className={newsstyle.card}>
                    <img src="img/new3jpg.jpg" alt="" />
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
                </div><div className={newsstyle.card}>
                    <img src="img/new4.jpg" alt="" />
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
                </div><div className={newsstyle.card}>
                    <img src="img/new5.jpg" alt="" />
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
                </div><div className={newsstyle.card}>
                    <img src="img/new5.jpg" alt="" />
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
        </div>
    );
};

export default News;
