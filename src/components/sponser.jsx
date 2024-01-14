import sponserstyle from "../components-css/sponser.module.css";
const Sponser = () => {
    return (
        <section className={sponserstyle.container}>
            <div className={sponserstyle.containerBox}>
                <div className={sponserstyle.item}>
                    <img src="img/logo1.png" alt="" />
                    <img src="img/logo2.png" alt="" />
                    <img src="img/logo3.png" alt="" />
                    <img src="img/logo4.png" alt="" />
                    <img src="img/logo5.png" alt="" />
                    <img src="img/logo5.png" alt="" />
                    <img src="img/logo5.png" alt="" />
                    <img src="img/logo5.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Sponser;
