import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Homelayout = () => {
    return (
        <div className='flex-row justify-center mx-auto '>
<div>
    <Navbar></Navbar>
    </div>            
            <div className="m-5  mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Homelayout;