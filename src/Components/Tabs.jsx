import React, { useState } from "react";
import Style from "./Detailpage.module.css";

const Tabs = ({ gameDetail }) => {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className={ Style.tabsWrapper }>

            {/* ✅ TAB HEADERS */ }
            <div className={ Style.tabsHeader }>
                <button
                    className={ activeTab === "about" ? Style.activeTab : "" }
                    onClick={ () => setActiveTab("about") }
                >
                    About
                </button>

                <button
                    className={ activeTab === "walk" ? Style.activeTab : "" }
                    onClick={ () => setActiveTab("walk") }
                >
                    Walkthrough
                </button>

                <button
                    className={ activeTab === "controls" ? Style.activeTab : "" }
                    onClick={ () => setActiveTab("controls") }
                >
                    Controls
                </button>
            </div>

            {/* ✅ TAB CONTENT */ }
            <div className={ Style.tabContent }>
                { activeTab === "about" && (
                    <div>
                        <div className={ Style.rating }>
                            <div>

                                <h2>Rating</h2>
                                <p>⭐ ⭐ ⭐ ⭐ ⭐ { gameDetail.game.rating.rating } </p>
                            </div>
                            <div>
                                <img style={ { cursor: 'pointer' } } src="https://images.atmegame.com/img/icon-report.svg" alt="" />
                            </div>
                        </div>

                        <h1 className={ Style.name }>{ gameDetail.game.game.name }</h1>
                        <div
                            dangerouslySetInnerHTML={ {
                                __html: gameDetail?.game?.game?.description
                            } }
                        />
                    </div>
                ) }

                { activeTab === "walk" && (
                    <div>
                        <h2>Walkthrough</h2>
                        <p>Walkthrough details here…</p>
                    </div>
                ) }

                { activeTab === "controls" && (
                    <div>
                        <h2>Controls</h2>
                        <ul>
                            <li>Arrow keys — Move</li>
                            <li>Space — Jump</li>
                            <li>Mouse — Interact</li>
                        </ul>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default Tabs;
