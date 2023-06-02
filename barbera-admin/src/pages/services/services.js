import React, { useState } from 'react';

function Services () {
    return (
        <div className="flex flex-col align-center">
            <div className="mb-5">
                <div className="flex flex-row">
                <p className="font-jost font-bold text-lg sm:text-3xl leading-29 text-yellow-500">Services</p>
                <button>
                    <div>
                        <p className="font-jost text-md sm:text-lg leading-29 text-yellow-500 pl-40 ml-6 sm:pl-96 sm:ml-96 ">Add Service</p>
                    </div>
                </button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="border-2 border-lime-3005 h-5 w-96"></div>
                <div className="border-2 border-lime-3005 h-5 w-96"></div>
                <div className="border-2 border-lime-3005 h-5 w-96"></div>
                <div className="border-2 border-lime-3005 h-5 w-96"></div>

            </div>
        </div>
    );
}

export default Services;