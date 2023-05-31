import React, { useState } from 'react';
import Bookings from './Total-booking.svg';
import Earning from './Total-earnings.svg';
import DownArrow from './DownArrow.svg';
function Dashboard () {
    return (
        <div className="flex flex-row align-center">
            <div className="absolute">
                <div className="flex flex-row">
                <p className="font-jost font-bold text-20 leading-29 text-yellow-500">April Activity</p>
                <img src={DownArrow} className="mx-2 my-3"/>
                </div>
            </div>
            <div className="bg-yellow-500 container h-full w-1/4 mr-10 mt-16 rounded-3xl">
                <img src={Bookings} className="mx-auto my-5 " />
            </div>
            <div className="bg-yellow-500 container h-90 w-1/4 mt-16 rounded-3xl">
                <img src={Earning} className="mx-auto my-5" />
                
            </div>
        </div>
    );
}

export default Dashboard;