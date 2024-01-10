
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../../src/assets/images/logo.png";
import {Link} from 'react-router-dom'


function CategoryPage() {
  const { categoryName } = useParams(); 
  const games = useSelector((state) =>
    state.game.data.games.filter((game) => game.category === categoryName)
  );
  console.log(games)
  
  if (!games || games.length === 0) {
    return <p>No games found for this category</p>;
  }
  
  return (
    <div className='bg-gradient-to-r from-blue-600 to-violet-600 min-h-screen p-2'>
      <div className=' flex justify-between bg-gradient-to-r from-indigo-400 to-cyan-400 p-2 text-black font-serif text-2xl rounded-lg'>
      <h2 >{categoryName} Games</h2>
      <Link to='/'>
            <img className="h-[40px] p-1 ml-6" src={logo} alt="logo"></img>
            </Link>
       </div>
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-2 p-4 bg-gradient-to-r from-blue-600 to-violet-600 h-full">
        {games.map((game) => (
          <Link to={`/games/${game.gameid}`} key={game.gameid}>
          {/* // <div key={game.gameid}> */}
            {/* <img className="object-fit rounded-lg lg:h-[300px] md:h-[300px] sm:h-[200px] h-[100px] w-[230px] border border-white overflow-hidden hover:scale-105 mt-3" src={game.imgurlnew} alt={game.gamename} />
            <p className='text-white'>{game.gamename}</p> */}
          {/* </div> */}
          <div className={`relative ${game.category} group`}>
                <img 
                  className="rounded-lg object-fit lg:h-[280px] md:h-[300px] sm:h-[200px] h-[150px] w-[200px] border border-white overflow-hidden mx-auto transition-transform duration-300 transform scale-100 group-hover:scale-105"
                  src={game.imgurlnew}
                  alt={game.gamename} 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="bg-yellow-400 text-white px-2 py-1 rounded-lg font-semibold">Play Now</button>
                </div>
                <h2 className="text-center text-white font-serif">{game.gamename}</h2>
                <h3 className="text-center text-white font-serif">{game.category}</h3>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;


