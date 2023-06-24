import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, adminRoutes} from "../../router";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, fetchUsers} from "../../asyncActions/users";
import {fetchForms} from "../../asyncActions/forms";


const AppRouter = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)
    const user = useSelector(state => state.users.user)

    useEffect( () => {
        (async function () {
            dispatch(fetchUser())
            dispatch(fetchUsers())
            dispatch(fetchForms())
            await setLoading(false)
        })();
    }, [])

    return (
        <Routes>
            <Route element={<PrivateRoutes/>}>
                {!loading && privateRoutes.map(route =>
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
                )}
            </Route>
            <Route element={<Navigate to={'/home'}/>} path={"/"}/>
        </Routes>
    )
}

export default AppRouter;