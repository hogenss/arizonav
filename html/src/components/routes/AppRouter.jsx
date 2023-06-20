import React, {useContext, useEffect} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes, adminRoutes} from "../../router";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import PublicRoutes from "./PublicRoutes";
// import {Context} from "../../index";
// import {observer} from 'mobx-react-lite'

const AppRouter = () => {

    // const {store} = useContext(Context)

    // useEffect(() => {
    //     if(localStorage.getItem('token')) {
    //         store.checkAuth().then(() => store.getUsers())
    //     }
    // }, [])

    return (
        <Routes>
            <Route element={<PrivateRoutes auth={true}/>}>
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route element={<AdminRoutes admin={true}/>}>
                    {adminRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            key={route.path}
                        />
                    )}
                </Route>
            </Route>
            <Route element={<PublicRoutes auth={true}/>}>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Route>
            <Route element={<Navigate to={'/'}/>} path={'*'}/>
        </Routes>
    )
}

export default AppRouter;