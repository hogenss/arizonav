import React from 'react';
import {Navigate, Outlet, useMatch} from "react-router-dom";
import cl from './PrivateRoutes.module.css'
// import SlideBar from "../SlideBar/SlideBar";
// import MiniProfile from "../MiniProfile/MiniProfile";

const PrivateRoutes = ({auth}) => {
    const path = useMatch('/profile/:id')

    return (
        auth
            ?
            <div className={cl.routes}>
                {/*<SlideBar/>*/}
                <div className={cl.pages}>
                    <Outlet />
                </div>
                {/*{*/}
                {/*    path*/}
                {/*        ?*/}
                {/*        null*/}
                {/*        :*/}
                {/*        <MiniProfile/>*/}
                {/*}*/}
            </div>
            :
            <Navigate to={'/'}/>
    );
};

export default PrivateRoutes;