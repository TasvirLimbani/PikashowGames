// import { useNavigate } from 'react-router-dom';
// import React, { useEffect, useState, useRef } from 'react';
// import Style from './Home.module.css';
// // import { db } from '../firebase';
// // import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';

// const Home = () => {
//   const pageSize = 50;
//   const [Data, setData] = useState([]);
//   const [lastVisible, setLastVisible] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [noMoreData, setNoMoreData] = useState(false);
//   const initialLoadDone = useRef(false);  // ← This is the key

//   const navigate = useNavigate();

//   const loadGames = async () => {
//     if (loading || noMoreData) return;

//     setLoading(true);

//     fetch("https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/game.json")
//       .then((response) => response.json())
//       .then((json) => {
//         setData(json.games);
//         console.log(json.games);

//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });

//     // try {
//     //   let q;
//     //   if (lastVisible) {
//     //     q = query(
//     //       collection(db, 'games'),
//     //       orderBy('createdAt'),
//     //       startAfter(lastVisible),
//     //       limit(pageSize)
//     //     );
//     //   } else {
//     //     q = query(
//     //       collection(db, 'games'),
//     //       orderBy('createdAt'),
//     //       limit(pageSize)
//     //     );
//     //   }

//     //   const snapshot = await getDocs(q);

//     //   if (snapshot.empty) {
//     //     setNoMoreData(true);
//     //   } else {
//     //     const newGames = snapshot.docs.map(doc => ({
//     //       id: doc.id,
//     //       ...doc.data(),
//     //     }));
//     //     setData(prev => [...prev, ...newGames]);
//     //     setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
//     //   }
//     // } catch (error) {
//     //   console.error('❌ Error loading games:', error);
//     // }

//     setLoading(false);
//   };

//   useEffect(() => {
//     // Only load data once on mount
//     if (!initialLoadDone.current) {
//       loadGames();
//       initialLoadDone.current = true;
//     }
//   }, []);

//   return (
//     <div className={ Style.main }>
//       <div className={ Style.container }>
//         <div className={ Style.games }>
//           { Data.map((item) => (
//             <div
//               className={ Style.box1 }
//               key={ item.id }  // use unique id here!
//               onClick={ () => navigate(`/details/${item.id}`, { state: item }) }
//             >
//               <img src={ `https://slides.atmegame.com/slide/${item.image}_slide.jpg` } alt={ item.title || 'Game' } />
//             </div>
//           )) }
//         </div>

//         { !noMoreData && (
//           <button
//             onClick={ loadGames }
//             disabled={ loading }
//             style={ { cursor: loading ? 'not-allowed' : 'pointer' } }
//             className={ Style.loadMoreBtn }
//           >
//             { loading ? 'Loading...' : 'Load More' }
//           </button>
//         ) }

//         { noMoreData && (
//           <p style={ { textAlign: 'center', marginTop: '20px' } }>No more games to load.</p>
//         ) }
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Style from "./Home.module.css";
import Footer from "./Footer";

const Home = () => {
  const pageSize = 150;

  const [allGames, setAllGames] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadGames = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/game.json"
      );
      const json = await res.json();

      setAllGames(json.games);
      setDisplayed(json.games.slice(0, pageSize));
    } catch (err) {
      console.error("Error fetching games:", err);
    }

    setLoading(false);
  };

  const totalPages = Math.ceil(allGames.length / pageSize);

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    setDisplayed(allGames.slice(start, end));
  };

  const pageNumbers = () => {
    const visibleCount = 6;
    let start = Math.max(1, page - Math.floor(visibleCount / 2));
    let end = start + visibleCount - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - visibleCount + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className={ Style.main }>
      <div className={ Style.container }>

        {/* ✅ Show loader while fetching */ }
        { loading && (
          <p style={ { textAlign: "center", marginTop: "40px" , height:"100vh", width:"100%"} }>Loading...</p>
        ) }

        {/* ✅ Show games only when NOT loading */ }
        { !loading && (
          <>
            <div className={ Style.games }>
              { displayed.map((item) => (
                <div
                  className={ Style.box1 }
                  key={ item.id }
                  onClick={ () => navigate(`/details/${item.id}`, { state: item }) }
                >
                  <img
                    src={ `https://slides.atmegame.com/slide/${item.image}_slide.jpg` }
                    alt={ item.title || "Game" }
                  />
                </div>
              )) }
            </div>

            {/* ✅ Pagination only when data loaded */ }
            { totalPages > 1 && (
              <div style={ { textAlign: "center", marginTop: "20px" } }>
                <button
                  disabled={ page === 1 }
                  onClick={ () => goToPage(page - 1) }
                  style={ btnStyle }
                >
                  Prev
                </button>

                { pageNumbers().map((num) => (
                  <button
                    key={ num }
                    style={ {
                      ...btnStyle,
                      background: num === page ? "#000" : "#eee",
                      color: num === page ? "#fff" : "#000",
                    } }
                    onClick={ () => goToPage(num) }
                  >
                    { num }
                  </button>
                )) }

                <button
                  disabled={ page === totalPages }
                  onClick={ () => goToPage(page + 1) }
                  style={ btnStyle }
                >
                  Next
                </button>
              </div>
            ) }
          </>
        ) }
      </div>
      <Footer />
    </div>
  );
};

const btnStyle = {
  margin: "0 5px",
  padding: "5px 12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  cursor: "pointer",
};

export default Home;
