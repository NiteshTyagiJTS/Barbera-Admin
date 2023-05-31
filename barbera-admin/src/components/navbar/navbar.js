import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';

function Navbar({ onLogout, userId }) {
  const [isShown, setIsShown] = useState(false);
  const openSidebar = () => {
    setIsShown(current => !current);
  };

  const hideSidebar = (event) => {
    // if (window.innerWidth < 640 && isShown && event.touches[0].clientX > window.innerWidth / 2) {
    //   setIsShown(false);
    // }
    if (isShown && event.touches[0].clientX > window.innerWidth / 2) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('touchstart', hideSidebar);
    return () => {
      window.removeEventListener('touchstart', hideSidebar);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between items-center px-24 absolute w-full h-16 left-0 top-5 bg-zinc-900 shadow-md">
        <button
          className="text-red-100 absolute left-5 text-yellow-600 left-1/4 absolute text-2xl"
          onClick={openSidebar}
        >
          &#9776;
        </button>
        <p className="text-yellow-500 left-1/4 absolute text-lg sm:text-3xl">Hello Smaran!</p>
        <p className="text-yellow-500 right-10 sm:right-20 absolute text-sm sm:text-md">Smaran U.</p>
      </div>

      {isShown && <Sidebar />}
      <div className="hidden sm:block">
        <Sidebar />
      </div>
    </div>
  );
}

export default Navbar;
