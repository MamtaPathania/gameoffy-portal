import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from './store/Slice';
import Header from './Header';
import GameCarousel from './GameCarousel';
import { Link } from 'react-router-dom';
import spinner from '../../src/assets/images/spinner.gif';
import Footer from './Footer';

function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [showMore, setShowMore] = useState(false);
  
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (state.game.isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <img
          className="min-w-full min-h-full object-fill"
          alt="background"
          src={spinner}
        />
      </div>
    );
  }

  // Group games by category
  const gamesByCategory = {};
  state.game.data.games.forEach((game) => {
    if (!gamesByCategory[game.category]) {
      gamesByCategory[game.category] = [];
    }
    gamesByCategory[game.category].push(game);
  });

  // Get categories in serial-wise order
  const categories = state.game.data.category?.map((cat) => cat.cat_name);

  // Get the first 3 categories initially
  const initialCategories = categories?.slice(0, 3);

  // Get all categories if "Show More" is clicked 
  const categoriesToShow = showMore ? categories : initialCategories;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header category={state.game.data.category} />
      <div className="flex-grow overflow-y-auto bg-white">
        <GameCarousel games={state.game.data.games} />

        {/* Display categories */}
        {categoriesToShow?.map((categoryName) => {
          // Trim the categoryName to remove leading and trailing spacesin arcade category
          const trimmedCategoryName = categoryName.trim();

          return (
            <div key={trimmedCategoryName} className='bg-gradient-to-r from-blue-600 to-violet-600'>
              <div className="bg-gradient-to-l from-rose-400 to-indigo-600 mx-3 rounded-lg">
                <h1 className="text-2xl lg:p-0 p-2 lg:px-6 lg:py-3 text-white font-sans font-bold relative">
                  {trimmedCategoryName}
                </h1>
              </div>
              
              <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 bg-gradient-to-r from-blue-600 to-violet-600 lg:p-9 md:p-5 sm:p-4 p-3">
                {gamesByCategory[trimmedCategoryName]?.map((game) => (
                  <Link to={`/games/${game.gameid}`} key={game.gameid}>
                    <div className={`relative ${game.category} group`}>
                      <img
                        className="rounded-lg object-fit lg:h-[230px] md:h-[300px] sm:h-[200px] h-[150px] w-[200px] border border-white overflow-hidden mx-auto transition-transform duration-300 transform scale-100 group-hover:scale-105"
                        src={game.imgurlnew}
                        alt={game.gamename}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button className="bg-yellow-400 text-white px-2 py-1 rounded-lg font-semibold">
                          Play Now
                        </button>
                      </div>
                      <h2 className="text-center text-white font-sans uppercase text-bold lg:mt-2">
                        {game.gamename}
                      </h2>
                      {/* <h3 className="text-center text-white font-serif">
                        {game.category}
                      </h3> */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* Show More button */}
        {!showMore && (
          <div className="flex justify-center bg-gradient-to-r from-blue-600 to-violet-600">
            <button 
              onClick={() => setShowMore(true)}
              className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white rounded-lg m-4 p-2"
            >
              Show More Categories
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;








// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchGames } from './store/Slice';
// import Header from './Header';
// import GameCarousel from './GameCarousel';
// import { Link } from 'react-router-dom';
// import spinner from '../../src/assets/images/spinner.gif';
// import Footer from './Footer';

// function HomePage() {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);
//   console.log(state);
//   const [showMore, setShowMore] = useState(false);
  

//   useEffect(() => {
//     dispatch(fetchGames());
//   }, [dispatch]);

//   if (state.game.isLoading) {
//     return (
//       <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
//         <img
//           className="min-w-full min-h-full object-fill"
//           alt="background"
//           src={spinner}
//         />
//       </div>
//     );
//   }

//   // Group games by category
//   const gamesByCategory = {};
//   state.game.data.games.forEach((game) => {
//     if (!gamesByCategory[game.category]) {
//       gamesByCategory[game.category] = [];
//     }
//     gamesByCategory[game.category].push(game);
//   });

//   // Get the first 4 categories initially
//   const initialCategories = Object.keys(gamesByCategory).slice(0, 3);

//   // Get all categories if "Show More" is clicked
//   const categoriesToShow = showMore
//     ? Object.keys(gamesByCategory)
//     : initialCategories;

//   return (
//     <div className="h-screen flex flex-col overflow-hidden">
//       <Header category={state.game.data.category} />
//       <div className="flex-grow overflow-y-auto bg-white">
//         <GameCarousel games={state.game.data.games} />

//         {/* Display categories */}
//         {categoriesToShow.map((category) => (
//           <div key={category} className='bg-gradient-to-r from-blue-600 to-violet-600'>
//             <div className="bg-gradient-to-l from-rose-400 to-indigo-600 mx-3 rounded-lg">
//               <h1 className="text-2xl lg:p-0 p-2 lg:px-6 lg:py-3 text-white font-sans font-bold relative">
//                 {category}
//                 {/* <div className="absolute bottom-0 left-0 right-0 w-full border-b-2 border-dotted border-white border-opacity-50"></div> */}
//               </h1>
//             </div>
            
//             <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 bg-gradient-to-r from-blue-600 to-violet-600 lg:p-9 md:p-5 sm:p-4 p-3">
//               {gamesByCategory[category].map((game) => (
//                 <Link to={`/games/${game.gameid}`} key={game.gameid}>
//                   <div className={`relative ${game.category} group`}>
//                     <img
//                       className="rounded-lg object-fit lg:h-[230px] md:h-[300px] sm:h-[200px] h-[150px] w-[200px] border border-white overflow-hidden mx-auto transition-transform duration-300 transform scale-100 group-hover:scale-105"
//                       src={game.imgurlnew}
//                       alt={game.gamename}
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                       <button className="bg-yellow-400 text-white px-2 py-1 rounded-lg font-semibold">
//                         Play Now
//                       </button>
//                     </div>
//                     <h2 className="text-center text-white font-serif">
//                       {game.gamename}
//                     </h2>
//                     <h3 className="text-center text-white font-serif">
//                       {game.category}
//                     </h3>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}

//         {/* Show More button */}
//         {!showMore && (
//           <div className="flex justify-center bg-gradient-to-r from-blue-600 to-violet-600">
//             <button
//               onClick={() => setShowMore(true)}
//               className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white rounded-lg m-4 p-2"
//             >
//               Show More Categories
//             </button>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default HomePage;






// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchGames } from './store/Slice';
// import Header from './Header';
// import GameCarousel from './GameCarousel';
// import { Link } from 'react-router-dom'; 
// import spinner from '../../src/assets/images/spinner.gif';
// import Footer from './Footer';
// // import ContinuePlaying from './ContinuePlaying';

// function HomePage() {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);
//   console.log(state)
//   useEffect(() => {
//     dispatch(fetchGames());
//   }, [dispatch]);

//   if (state.game.isLoading) {
//     return (
//       <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
//         <img
//           className="min-w-full min-h-full object-fill"
//           alt="background"
//           src={spinner}
//         />
//       </div>
//     );
//   } 
//   //top 10games 
//   const top10Games=state.game.data.games.slice(0,10);
//   return (
//     <div className='h-screen flex flex-col overflow-hidden'>
//       <Header category={state.game.data.category}/>
//       <div className="flex-grow overflow-y-auto bg-white">

//       <GameCarousel games={state.game.data.games} />
//       <div className="bg-black">
//   <h1 className="text-2xl p-0 lg:px-6 lg:py-3 text-white font-sans font-bold relative">
//     Top 10 Games
//     <div className="absolute bottom-0 left-0 right-0 w-full border-b-2 px-8 border-dotted border-black"></div>
//   </h1>
// </div>


//       <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 bg-black lg:p-9 md:p-5 sm:p-4 p-3'>
//         {/* {state.game.data && state.game.data.games ? (
//           state.game.data.games.map((game) => ( */}
//           {top10Games.length > 0 ? (
//           top10Games.map((game) => (
//             <Link to={`/games/${game.gameid}`} key={game.gameid}>
//               <div className={`relative ${game.category} group`}>
//                 <img 
//                   className="rounded-lg object-fit lg:h-[230px] md:h-[300px] sm:h-[200px] h-[150px] w-[200px] border border-white overflow-hidden mx-auto transition-transform duration-300 transform scale-100 group-hover:scale-105"
//                   src={game.imgurlnew}
//                   alt={game.gamename}
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                   <button className="bg-yellow-400 text-white px-2 py-1 rounded-lg font-semibold">Play Now</button>
//                 </div>
//                 <h2 className="text-center text-white font-serif">{game.gamename}</h2>
//                 <h3 className="text-center text-white font-serif">{game.category}</h3>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p>No data available.</p>
//         )}
//       </div>
//       {/* <ContinuePlaying games={state.game.data.games}/> */}
//       </div>
// <Footer/>
//     </div>
//   );
// }

// export default HomePage;
