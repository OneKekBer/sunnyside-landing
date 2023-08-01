import "./index.css";

import { Button, Menu, MenuItem, useMediaQuery } from "@mui/material";

import arrow from "./assets/icon-arrow-down.svg";
import egg from "./assets/egg.jpg";
import vine from "./assets/vine.jpg";
import emil from "./assets/image-emily.jpg";
import jeni from "./assets/image-jennie.jpg";
import thom from "./assets/image-thomas.jpg";

import facebook from './assets/icon-facebook.svg'
import print from './assets/icon-pinterest.svg'
import twitter from './assets/icon-twitter.svg'
import insta from './assets/icon-instagram.svg'
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    const isNonMobileScreen576 = useMediaQuery("(min-width:576px)");

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(window.innerWidth);

    return (
        <div className="wrapper">
            <div className="header">
                <div className="container flex-between">
                    <div className="header__logo">sunnyside</div>
                    {isNonMobileScreen576 ? (
                        <div className="header__buttons flex-between ">
                            <div className="header__text">About</div>
                            <div className="header__text">Services</div>
                            <div className="header__text">Projects</div>
                            <div className="header__button ">Contact</div>
                        </div>
                    ) : (
                        <div>
                            <Button
                                id="basic-button"
                                variant='text'
                                sx={{ color: 'white' }}
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>About</MenuItem>
                                <MenuItem onClick={handleClose}>Services</MenuItem>
                                <MenuItem onClick={handleClose}>Projects</MenuItem>
                                <MenuItem onClick={handleClose}>Contact</MenuItem>
                            </Menu>
                        </div>
                    )}
                </div>
            </div>

            {/* ----- */}

            <div className="hero">
                <div className="container text-center">
                    <h1 className="hero__text">WE ARE CREATIVES</h1>
                    <img src={arrow} alt="" />
                </div>
            </div>

            {/* ----- */}

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
                            <h1>Graphic design</h1>
                            <p>
                                Great design makes you memorable. We deliver
                                artwork that underscores your brand message and
                                captures potential clients’ attention.
                            </p>
                        </div>
                    </div>

                    <div className="adv__box box  adv__box-6 text-bg text-bg-2">
                        <div className="adv__box-text ">
                            <h1>Photography</h1>
                            <p>
                                Increase your credibility by getting the most
                                stunning, high-quality photos that improve your
                                business image.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----- */}

            <div className='rev'>
                <div className="container text-center">
                    <h2 className='rev__h2'>CLIENT TESTIMONIALS</h2>
                    <div className='rev__revs '>
                        <div className="rev__box text-center">
                            <img className='rev__box-ava' src={emil} alt="emil" />
                            <p className='rev__box-title'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                            </p>
                            <h4 className='rev__box-name'>Emily R.</h4>
                            <h5 className='rev__box-occ'>Marketing Director</h5>
                        </div>

                        <div className="rev__box text-center">
                            <img className='rev__box-ava' src={jeni} alt="emil" />
                            <p className='rev__box-title'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                            </p>
                            <h4 className='rev__box-name'>Emily R.</h4>
                            <h5 className='rev__box-occ'>Marketing Director</h5>
                        </div>

                        <div className="rev__box text-center">
                            <img className='rev__box-ava' src={thom} alt="emil" />
                            <p className='rev__box-title'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                            </p>
                            <h4 className='rev__box-name'>Emily R.</h4>
                            <h5 className='rev__box-occ'>Marketing Director</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---- */}

            <div className='catalog'>
                <div className="container">
                    <div className='catalog__box box-1'></div>
                    <div className='catalog__box box-2'></div>
                    <div className='catalog__box box-3'></div>
                    <div className='catalog__box box-4'></div>
                </div>
            </div>
            {/* --- */}

            <div className="footer">
                <div className="container text-center">
                    <h1>sunnyside</h1>
                    <div className='flex-center footer__titles'>
                        <p className='footer__title'>About</p>
                        <p className='footer__title'>Services</p>
                        <p className='footer__title'>Projects</p>
                    </div>

                    <div className='flex-center footer__socs'>
                        <div className='footer__soc'>
                            <img src={facebook} alt="" />
                        </div>
                        <div className='footer__soc'>
                            <img src={insta} alt="" />
                        </div>
                        <div className='footer__soc'>
                            <img src={print} alt="" />
                        </div>
                        <div className='footer__soc'>
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
