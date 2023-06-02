import React, { useState } from 'react';
import WeightChart from '../../components/chart/chart';
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
            
            <div className="bg-yellow-500 container h-full w-3/5 mr-10 mt-8 rounded-3xl px-4 py-3 sm:hidden">
                <img src={Bookings} className="mx-auto my-5 " />
                <p className="font-jost font-normal font-medium text-lg leading-6 text-gray-700 py-6">Total earnings</p>
                <div className="bg-white px-4 py-4 rounded-xl my-6">
                    <div className="font-jost font-normal font-regular text-xl leading-6 text-gray-700 py-4">₹2,04,000</div>
                </div>
            </div>
            <div className="bg-yellow-500 container h-90 w-3/5 mt-8 rounded-3xl px-3 py-4 justify-center align-center sm:hidden">
                <img src={Earning} className="mx-auto my-5" />
                <p className="font-jost font-normal font-medium text-lg leading-6 text-gray-700 py-6">Total bookings</p>
                <div className="bg-white px-12 py-4 rounded-xl my-4">
                    <div className="font-jost font-normal font-regular text-xl leading-6 text-gray-700 py-4">202</div>
                </div>
            </div>
            <div className="bg-yellow-500 container h-full w-1/5 mr-10 mt-16 rounded-3xl px-10 py-4 hidden sm:block">
                <img src={Bookings} className="mx-auto my-5 " />
                <p className="font-jost font-normal font-medium text-xl leading-6 text-gray-700 py-6">Total earnings</p>
                <div className="bg-white px-4 py-4 rounded-xl my-6">
                    <div className="font-jost font-normal font-regular text-3xl leading-6 text-gray-700 py-4">₹2,04,000</div>
                </div>
            </div>
            <div className="bg-yellow-500 container h-90 w-1/5 mt-16 rounded-3xl px-10 py-4 justify-center align-center hidden sm:block">
                <img src={Earning} className="mx-auto my-5" />
                <p className="font-jost font-normal font-medium text-xl leading-6 text-gray-700 py-6">Total bookings</p>
                <div className="bg-white px-12 py-4 rounded-xl my-4">
                    <div className="font-jost font-normal font-regular text-3xl leading-6 text-gray-700 py-4">202</div>
                </div>
            </div>
            {/* <div className="sm:block container bg-red-300 my-16 h-96"> */}

            {/* </div> */}
            {/* <WeightChart /> */}
        </div>
    );
}

export default Dashboard;