import React from 'react';
import {Navigate, Outlet, useMatch} from "react-router-dom";
import cl from './PrivateRoutes.module.css'
import NavBar from "../NavBar";
// import SlideBar from "../SlideBar/SlideBar";
// import MiniProfile from "../MiniProfile/MiniProfile";

const PrivateRoutes = ({auth}) => {

    return (
        auth
            ?
            <div className={cl.routes}>
                <NavBar />
                <div className={cl.pages}>
                    <Outlet />
                </div>
            </div>
            :
            <Navigate to={'/'}/>
    );
};

export default PrivateRoutes;