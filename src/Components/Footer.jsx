import React from "react";
import Style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={ Style.footer }>
            <div className={ Style.top }>
                <div className={ Style.logo }>
                    <h2>PIKASHOW<span>GAMES</span></h2>
                    <p>Play thousands of HTML5 games online for free.</p>
                </div>

                <div className={ Style.links }>
                    <h4>Categories</h4>
                    <ul>
                        <li>Action</li>
                        <li>Sports</li>
                        <li>Racing</li>
                        <li>Puzzle</li>
                        <li>Adventure</li>
                    </ul>
                </div>

                <div className={ Style.links }>
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>

                <div className={ Style.social }>
                    <h4>Follow Us</h4>
                    <div className={ Style.icons }>
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            <div className={ Style.bottom }>
                <p>© { new Date().getFullYear() } PikashowGames — All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
