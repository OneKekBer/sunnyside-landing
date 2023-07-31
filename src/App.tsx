import "./index.css";

import arrow from "./assets/icon-arrow-down.svg";
import egg from "./assets/egg.jpg";
import vine from "./assets/vine.jpg";

function App() {
    console.log(window.innerWidth);

    return (
        <div className="wrapper">
            <div className="header">
                <div className="container flex-between">
                    <div className="header__logo">sunnyside</div>
                    {window.innerWidth >= 570 ? (
                        <div className="header__buttons flex-between ">
                            <div className="header__text">About</div>
                            <div className="header__text">Services</div>
                            <div className="header__text">Projects</div>
                            <div className="header__button ">Contact</div>
                        </div>
                    ) : (
                        <div> menu</div>
                    )}
                </div>
            </div>
            <div className="hero">
                <div className="container text-center">
                    <h1 className="hero__text">WE ARE CREATIVES</h1>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="adv">
                <div className="adv__container">
                    <div className="adv__box adv__box-1">
                        <div className="adv__box-text">
                            <h1>Transform your brand</h1>
                            <p>
                                We are a full-service creative agency
                                specializing in helping brands grow fast. Engage
                                your clients through compelling visuals that do
                                most of the marketing for you.
                            </p>
                            <div className="adv__box-button"> learn more </div>
                        </div>
                    </div>
                    <div className="adv__box box adv__box-2">
                        <img className="adv__box-img" src={egg} alt="" />
                    </div>

                    <div className="adv__box box adv__box-3">
                        <img className="adv__box-img" src={vine} alt="" />
                    </div>

                    <div className="adv__box box adv__box-4">
                        <div className="adv__box-text">
                            <h1>Stand out to the right audience</h1>
                            <p>
                                Using a collaborative formula of designers,
                                researchers, photographers, videographers, and
                                copywriters, we’ll build and extend your brand
                                in digital places.
                            </p>
                            <div className="adv__box-button"> learn more </div>
                        </div>
                    </div>
                    <div className="adv__box box adv__box-5 text-bg text-bg-1">
                        <div className="adv__box-text">
                            <h1>Stand out to the right audience</h1>
                            <p>
                                Using a collaborative formula of designers,
                                researchers, photographers, ideographies, and
                                copywriters, we’ll build and extend your brand
                                in digital places.
                            </p>
                        </div>
                    </div>

                    <div className="adv__box box  adv__box-6 text-bg text-bg-2">
                        <div className="adv__box-text ">
                            <h1>Stand out to the right audience</h1>
                            <p>
                                Using a collaborative formula of designers,
                                researchers, photographers, videographers, and
                                copywriters, we’ll build and extend your brand
                                in digital places.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
