// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

// const GameCarousel = ({ games }) => {
//   // Slice the games array to display only the first 5 items
//   const limitedGames = games.slice(0, 5);

//   return (
//     <div className='p-4'>
//     <Carousel
//       autoPlay={true}
//       transitionTime={2000}
//       infiniteLoop={true}
//       showThumbs={false} 
      
//       // centerMode={true}
//     >
//       {limitedGames.map((game) => (
//         <div key={game.gameid}>
//           <img className="lg:h-[500px] md:h-[400px] sm:h-[300px] h-[200px] lg:max-w-full object-fill" src={game.imgurlnew} alt={game.gamename} />
//           {/* <h3>{game.gamename}</h3> */}
//           {/* <p>Category: {game.category}</p> */}
//           {/* Add more game information here */}
//         </div>
//       ))}
//     </Carousel>
//     </div>
//   );
// };

// export default GameCarousel;
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GameCarousel = ({ games }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Slice the games array to display only the first 5 items
  const limitedGames = games.slice(0, 5);

  return (
    <div className='p-4 bg-gradient-to-r from-blue-600 to-violet-600'>
      {isLargeScreen ? (
        <Carousel
          autoPlay={true}
          transitionTime={2000}
          infiniteLoop={true}
          showThumbs={false}
          centerMode={true} // Enable center mode
          centerSlidePercentage={33.33} // Show 3 items at a time
        >
          {limitedGames.map((game) => (
            <div key={game.gameid} className="rounded-lg overflow-hidden mx-2 ">
              <img
                className="lg:h-[400px] md:h-[400px] sm:h-[300px] h-[200px] lg:max-w-full"
                src={game.imgurlnew}
                alt={game.gamename}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <Carousel
          autoPlay={true}
          transitionTime={2000}
          infiniteLoop={true}
          showThumbs={false} // Show thumbs (dots)
          showStatus={false} // Hide status indicators
          centerMode={false} // Disable center mode
          emulateTouch={true} // Enable touch emulation
        >
          {limitedGames.map((game) => (
            <div key={game.gameid} className='mx-2'>
              <img
                className="lg:h-[500px] md:h-[400px] sm:h-[300px] h-[200px] lg:max-w-full"
                src={game.imgurlnew}
                alt={game.gamename}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default GameCarousel;

