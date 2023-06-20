import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const PublicRoutes = ({auth}) => {

    return (
        auth ? <Navigate to={'/home'}/> : <Outlet/>
    );
};

export default PublicRoutes;