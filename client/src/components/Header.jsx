// import React from 'react';
// import { Link, NavLink } from 'react-router-dom'; 
// export default function Header() {
//   return (
//     <div className='bg-slate-200 '>
//       <div className='justify-between flex items-center max-w-6xl mx-auto p-3'>
//         <Link to='/'>
//           <h1 className='font-bold'>Auth Site</h1>
//         </Link>
//         <ul className='flex gap-4'>
//           <Link to='/about'><li>Home</li></Link>
//           <Link to='/about'><li>About</li></Link>
//           <Link to='/profile'><li>Profile</li></Link>
//         </ul>
//       </div>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}