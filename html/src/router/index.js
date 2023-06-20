import {Proofs, Home, Login, Rating} from '../pages/index.jsx'

export const adminRoutes = [
    {path: '/proofs', component: <Proofs/>},
]

export const privateRoutes = [
    {path: '/home', component: <Home/>},
    {path: '/rating', component: <Rating/>},
]

export const publicRoutes = [
    {path: '/', component: <Login/>},
]