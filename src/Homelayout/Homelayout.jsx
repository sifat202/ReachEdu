import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Homelayout = () => {
    return (
        <div>
<div>
    <Navbar></Navbar>
    </div>            
            <div className="m-5 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Homelayout;