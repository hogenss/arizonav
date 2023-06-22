import React from 'react';
import {Outlet} from "react-router-dom";
import cl from './PrivateRoutes.module.css'
import NavBar from "../NavBar";
// import SlideBar from "../SlideBar/SlideBar";
// import MiniProfile from "../MiniProfile/MiniProfile";

const PrivateRoutes = () => {

    return (
        <div className={cl.routes}>
            <NavBar />
            <div className={cl.pages}>
                <Outlet />
            </div>
        </div>
    );
};

export default PrivateRoutes;