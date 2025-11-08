// import React, { useEffect, useState } from 'react'
// import { useLocation, useParams } from 'react-router-dom';
// import Style from './Detailpage.module.css'

// const Detailpage = () => {
//     const [liked, setLiked] = useState(false);
//     const [disliked, setDisliked] = useState(false);
//     const [likes, setLikes] = useState(450);
//     const [dislikes, setDislikes] = useState(3);
//     // const [dataDetl, setDataDetl] = useState(null);
//     const [gameDetail, setGameDetail] = useState(null);

//     const handleLike = () => {
//         if (!liked) {
//             setLikes(likes + 1);
//             setLiked(true);
//             if (disliked) {
//                 setDislikes(dislikes - 1);
//                 setDisliked(false);
//             }
//         } else {
//             setLikes(likes - 1);
//             setLiked(false);
//         }
//     };
//     const handleDislike = () => {
//         if (!disliked) {
//             setDislikes(dislikes + 1);
//             setDisliked(true);
//             if (liked) {
//                 setLikes(likes - 1);
//                 setLiked(false);
//             }
//         } else {
//             setDislikes(dislikes - 1);
//             setDisliked(false);
//         }
//     };
//     const location = useLocation();
//     const gameData = location.state; // ✅ Receive data from navigate()
//     // console.log('mmaindtat::::::::', gameData.slug);

//     useEffect(() => {
//         fetch(`https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/games/${gameData.slug}.json`)
//             .then((response) => response.json())
//             .then((json) => {
//                 setGameDetail(json.game.game);

//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, [])

//     console.log("Game detail::::::::", gameDetail);

//     if (!gameData) return <div>Loading...</div>;

//     return (
//         <>
//             <div className={ Style.main }>
//                 <div className={ Style.container }>
//                     <div className={ Style.sections }>
//                         <div className={ Style.sec1 }>
//                             <div className={ Style.screen }>
//                                 <div style={ { width: '100%', height: '600px', border: '2px solid #ccc', overflow: 'hidden' } }>
//                                     {/* <iframe
//                                         src={ `https://games.atmegame.com/games/${gameDetail.slug}/` }
//                                         title="Night City Racing"
//                                         width="100%"
//                                         height="100%"
//                                         style={ { border: 'none' } }
//                                         allowFullScreen
//                                     /> */}
//                                     { gameDetail?.slug && (
//                                         <iframe
//                                             // src={ `https://games.atmegame.com/games/${gameDetail.slug}/` }
//                                             src={ gameDetail?.script?.trim() }
//                                             title={ gameDetail.name }
//                                             width="100%"
//                                             height="100%"
//                                             style={ { border: "none" } }
//                                             allowFullScreen
//                                         />
//                                     ) }
//                                 </div>
//                                 <div className={ Style.infobar }>
//                                     <div className={ Style.infoflx }>
//                                         { gameDetail && <img src={ `https://slides.atmegame.com/slide/${gameDetail.image}_slide.jpg` } alt="" /> }
//                                         <div className={ Style.infoname }>
//                                             { gameDetail && <h1>{ gameDetail.name }</h1> }
//                                         </div>
//                                     </div>
//                                     <div className={ Style.playNow }>
//                                         <button>Play now ▶</button>
//                                     </div>
//                                     <div >
//                                         <div className={ Style.contt }>
//                                             <button className={ Style.btnn } onClick={ handleLike }>
//                                                 👍 { likes }
//                                             </button>
//                                             <button className={ Style.btnn } onClick={ handleDislike }>
//                                                 👎 { dislikes }
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={ Style.sec2 }>
//                             {/* <h1>#{ gameData.id } { dataDetl?.name }</h1> */ }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default Detailpage








import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Style from "./Detailpage.module.css";
import Tabs from "./Tabs";

const Detailpage = () => {
    const [gameDetail, setGameDetail] = useState(null);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        if (gameDetail?.game?.game?.likes) {
            setLikes(gameDetail.game.game.likes);
        }
    }, [gameDetail]);
    const [dislikes, setDislikes] = useState(3);

    useEffect(() => {
        if (gameDetail?.game?.game?.dislikes) {
            setDislikes(gameDetail.game.game.dislikes);
        }
    }, [gameDetail]);

    const location = useLocation();
    const gameData = location.state; // Received data from navigate()

    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
            if (disliked) {
                setDislikes(dislikes - 1);
                setDisliked(false);
            }
        } else {
            setLikes(likes - 1);
            setLiked(false);
        }
    };

    const handleDislike = () => {
        if (!disliked) {
            setDislikes(dislikes + 1);
            setDisliked(true);
            if (liked) {
                setLikes(likes - 1);
                setLiked(false);
            }
        } else {
            setDislikes(dislikes - 1);
            setDisliked(false);
        }
    };

    useEffect(() => {
        if (!gameData?.slug) return;

        fetch(
            `https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/games/${gameData.slug}.json`
        )
            .then((response) => response.json())
            .then((json) => {
                setGameDetail(json); // ✅ store full JSON
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [gameData]);

    if (!gameData || !gameDetail) return <div></div>;

    const mainGame = gameDetail.game.game; // ✅ Shorthand access
    const scriptURL = mainGame.script?.replace(/\r?\n|\r/g, "").trim(); // remove \r\n safely

    return (
        <>
            <div className={ Style.main }>
                <div className={ Style.container }>
                    <div className={ Style.sections }>
                        <div className={ Style.sec1 }>
                            <div className={ Style.screen }>
                                <div
                                    style={ {
                                        width: "100%",
                                        height: "600px",
                                        overflow: "hidden",
                                        borderRadius: "10px 10px  0 0"
                                    } }
                                >
                                    {/* ✅ Load iframe ONLY when script exists */ }
                                    { scriptURL && (
                                        <iframe
                                            src={ scriptURL }
                                            title={ mainGame.name }
                                            width="100%"
                                            height="100%"
                                            style={ { border: "none" } }
                                            allowFullScreen
                                        />
                                    ) }
                                </div>

                                <div className={ Style.infobar }>
                                    <div className={ Style.infoflx }>
                                        {/* ✅ Show image only when available */ }
                                        { mainGame?.image && (
                                            <img
                                                src={ `https://slides.atmegame.com/slide/${mainGame.image}_slide.jpg` }
                                                alt={ mainGame.name }
                                            />
                                        ) }

                                        <div className={ Style.infoname }>
                                            <h1>{ mainGame.name }</h1>
                                            <p> { gameDetail.game.category.name }</p>
                                        </div>
                                    </div>

                                    <div className={ Style.playNow }>
                                        <button>Play now ▶</button>
                                    </div>

                                    <div>
                                        <div className={ Style.contt }>
                                            <button className={ Style.btnn } onClick={ handleLike }>
                                                👍 { likes }
                                            </button>
                                            <button className={ Style.btnn } onClick={ handleDislike }>
                                                👎 { dislikes }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={ Style.sec2 }>
                            {/* Extra section */ }
                        </div>
                    </div>
                </div>
                <div className={ Style.Detail }>
                    <div></div>
                    <Tabs gameDetail={ gameDetail } />
                </div>
            </div >
        </>
    );
};

export default Detailpage;
