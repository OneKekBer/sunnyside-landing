import React from "react";
import "./../index.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="container flex-between">
                <div className="header__logo">sunnyside</div>
                <div className="header__buttons flex-between ">
                    <div className="header__button">About</div>
                    <div className="header__button">Services</div>
                    <div className="header__button">Projects</div>
                    <div className="header__button">Contact</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
