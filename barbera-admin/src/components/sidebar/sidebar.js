import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Logo from './barbera-logo.svg';
import Dashboard from './Dashboard-logo.svg';
import Booking from './Booking-logo.svg';
import User from './User-logo.svg';
import Services from './Services-logo.svg';
import Code from './Code-logo.svg';
import Banners from './Banners-logo.svg';
function Sidebar() {
    return (
        <div className="px-24 absolute w-1/4 left-0 top-0 bottom-0 bg-zinc-900 shadow-md">
            <img src={Logo} alt="Logo" className="absolute top-6 left-auto" />
        
            <div className="absolute top-32 left-0 w-full">
                <div className="text-yellow-500 flex space-x-3 bg-black w-full pl-10 py-3 hover:rounded-br-3xl hover:rounded-tr-3xl my-4">
                    <div><img src={Dashboard} className="" /></div>
                    <div>Dashboard</div>
                </div>
                <div className="text-gray-300 flex space-x-3 bg-black w-full pl-10 py-3 hover:rounded-br-3xl hover:rounded-tr-3xl my-4">
                    <div><img src={Booking} className="" /></div>
                    <div>Booking</div>
                </div>
                <div className="text-gray-300 flex space-x-3 bg-black w-full pl-10 py-3 hover:rounded-br-3xl hover:rounded-tr-3xl my-4">
                    <div><img src={User} className="" /></div>
                    <div>User</div>
                </div>
                <div className="text-gray-300 flex space-x-3 bg-black w-full pl-10 py-3 hover:rounded-br-3xl hover:rounded-tr-3xl my-4">
                    <div><img src={Services} className="" /></div>
                    <div>Services</div>
                </div>
                <div className="text-gray-300 flex space-x-3 bg-black w-full pl-10 py-3 hover:rounded-br-3xl hover:rounded-tr-3xl my-4">
                    <div><img src={Code} className="" /></div>
                    <div>Code</div>
                </div>
                <div className="text-gray-300 flex space-x-3 bg-black w-full pl-10 py-3 hover:rounded-br-3xl hover:rounded-tr-3xl my-4">
                    <div><img src={Banners} className="" /></div>
                    <div>Banners</div>
                </div>
                
            </div>
        </div>
    );
}

export default Sidebar;