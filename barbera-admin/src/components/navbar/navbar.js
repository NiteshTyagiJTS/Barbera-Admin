import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ onLogout, userId }) {
  return (
    <div className="flex flex-row justify-between items-center px-24 absolute w-full h-16 left-0 top-5 bg-zinc-900 shadow-md">
      <p>Navbar</p>
    </div>
  );
}

export default Navbar;