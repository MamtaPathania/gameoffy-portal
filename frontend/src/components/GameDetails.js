
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import logo from "../../src/assets/images/logo.png";
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function GameDetails() {
  const { gameid } = useParams();
  const game = useSelector((state) =>
    state.game.data.games.find((game) => game.gameid === gameid)
  );
  if (!game) {
    return <p>Game not found</p>;
  }
  
  return ( 
    <div className="bg-black h-screen relative">
      {/* <div className='flex justify-between bg-teal-400 p-2 text-black font-serif text-2xl rounded-lg'>
        <h1>{game.category}</h1>
        <img className="h-[40px] p-1 ml-6" src={logo} alt="logo" />
      </div> */}
      <Link to ='/' className='absolute top-4  p-2 text-red-600'>
  <IoMdClose size={30} />
</Link>

      <div className='flex justify-center items-center bg-black h-screen'>
        <iframe 
      className='w-full h-screen p-2'
      title={game.gamename}
          src={game.gameurl}
        
        ></iframe>
        {/* <h2 className='text-white text-center text-mono'>{game.gamename}</h2> */}
      </div>
    </div>
  );
}

export default GameDetails;




// // GameDetails.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import logo from "../../src/assets/images/logo.png";

// function GameDetails() {
//   const { gameid } = useParams();
//   const game = useSelector((state) =>
//     state.game.data.games.find((game) => game.gameid === gameid)
//   );
//  console.log(game)
//   if (!game) {
//     return <p>Game not found</p>;
//   }
  
//   return ( 
//     <div className="bg-black h-screen p-2 ">
//                  <div className=' flex justify-between bg-teal-400 p-2 text-black font-serif text-2xl rounded-lg'>

//             <h1>{game.category}</h1>
//             <img className="h-[40px] p-1 ml-6" src={logo} alt="logo"></img>
//             </div>

//             <div className='grid justify-items-center'>
//       <img className=' mt-8 rounded-lg h-[300px] w-[200px] border border-white overflow-hidden hover:scale-105'
//        src={game.imgurlnew} alt={game.gamename}/>
//        <h2 className='text-white text-center text-mono'>{game.gamename}</h2>
// </div>co
//     </div>
//   );
// }

// export default GameDetails;