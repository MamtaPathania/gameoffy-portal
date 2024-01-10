import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ category }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white relative">
      <div className="flex items-end justify-between uppercase">
        <Link to="/">
          <img
            className="lg:h-[60px] md:h-[40px] h-[70px] p-1 ml-8"
            src={logo}
            alt="logo"
          />
        </Link>

        {/* Hamburger Icon (visible on all screens) */}
        <div className="ml-auto mr-8">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="h-8 w-8 lg:h-6 lg:w-6 text-white" />
            ) : (
              <FaBars className="h-8 w-8 lg:h-6 lg:w-6 text-white" />
            )}
          </button>
        </div>

        {/* Categories (visible when icon is clicked) */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-0 h-full z-10">
            <ul className="bg-gradient-to-r from-indigo-500 to-blue-500 p-5">
              {category.map((e) => (
                <li key={e.cat_name} className="mb-2">
                  <Link 
                    to={`/category/${e.cat_name}`}
                    onClick={toggleMobileMenu}
                    className="font-serif hover:text-black"
                  >
                    {e.cat_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../src/assets/images/logo.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = ({ category }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="bg-teal-500 lg:text-white text-black relative">
//       <div className="flex items-end justify-between uppercase">
//         <Link to='/'>
//           <img
//             className="lg:h-[60px] md:h-[50px] h-[50px] p-1 ml-3"
//             src={logo}
//             alt="logo"
//           />
//         </Link>

//         {/* Hamburger Icon (visible on both mobile and larger screens) */}
//         <div className="ml-auto mr-4 ">
//           <button onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? (
//               <FaTimes className="h-6 w-6 text-white" />
//             ) : (
//               <FaBars className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>

//         {/* Links (visible on larger screens) */}
//         {/* <div className="hidden lg:flex lg:ml-4 lg:mr-5 gap-10">
//           {category.map((e) => (
//             <Link
//               to={`/category/${e.cat_name}`}
//               key={e.cat_name}
//               className="font-serif hover:text-black ml-4"
//             >
//               {e.cat_name}
//             </Link>
//           ))}
//         </div> */}
//       </div>

//       {/* Mobile Navigation (visible on mobile screens) */}
//       {isMobileMenuOpen && (
//         <div className="left-0 right-5 bg-white p-4 mt-12">
//           <ul>
//             {category.map((e) => (
//               <li key={e.cat_name} className="mb-2">
//                 <Link
//                   to={`/category/${e.cat_name}`}
//                   onClick={toggleMobileMenu}
//                   className="font-serif hover:text-black"
//                 >
//                   {e.cat_name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../src/assets/images/logo.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = ({ category }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="bg-teal-500 lg:text-white text-black relative">
//       <div className="flex items-end justify-between uppercase">
//         <Link to='/' >
//         <img
//           className="lg:h-[60px] md:h-[50px] h-[50px] p-1 ml-3"
//           src={logo}
//           alt="logo"
//         />
//         </Link>

//         {/* Hamburger Icon (visible on mobile screens) */}
//         <div className="lg:hidden ml-auto mr-4">
//           <button onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? (
//               <FaTimes className="h-6 w-6 text-white" />
//             ) : (
//               <FaBars className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>

//         {/* Links (visible on larger screens) */}
//         <div className="hidden lg:flex lg:ml-4 lg:mr-5 gap-10">
//           {category.map((e) => (
//             <Link
//               to={`/category/${e.cat_name}`}
//               key={e.cat_name}
//               className="font-serif hover:text-black ml-4"
//             >
//               {e.cat_name}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Navigation (visible on mobile screens) */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden relative left-0 right-5 bg-white p-4 mt-12">
//           <ul>
//             {category.map((e) => (
//               <li key={e.cat_name} className="mb-2">
//                 <Link
//                   to={`/category/${e.cat_name}`}
//                   onClick={toggleMobileMenu}
//                   className="font-serif hover:text-black"
//                 >
//                   {e.cat_name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;




