import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const AdminRoutes = ({admin}) => {
    return (
        admin ? <Outlet/> : <Navigate to={'/home'}/>
    );
};

export default AdminRoutes;