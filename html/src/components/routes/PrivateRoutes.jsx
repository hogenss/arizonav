import React from 'react';
import {Outlet} from "react-router-dom";
import cl from './PrivateRoutes.module.css'
import NavBar from "../NavBar";

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