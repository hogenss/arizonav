import React, {useContext, useEffect} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes, adminRoutes} from "../../router";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import PublicRoutes from "./PublicRoutes";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, fetchUsers} from "../../asyncActions/users";


const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser())
        dispatch(fetchUsers())
        console.log("effect")
    }, [])

    const user = useSelector(state => state.users.user)
    const users = useSelector(state => state.users.users)
    console.log(users)
    const isAuth = useSelector(state => state.users.iaAuth)

    return (
        <Routes>
            <Route element={<PrivateRoutes auth={isAuth}/>}>
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route element={<AdminRoutes admin={user.isAdmin}/>}>
                    {adminRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            key={route.path}
                        />
                    )}
                </Route>
            </Route>
            <Route element={<PublicRoutes auth={isAuth}/>}>
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