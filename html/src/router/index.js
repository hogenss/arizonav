import {Proofs, Home, Rating} from '../pages/index.jsx'

export const adminRoutes = [
    {path: '/proofs', component: <Proofs/>},
]

export const privateRoutes = [
    {path: '/home', component: <Home/>},
    {path: '/rating', component: <Rating/>},
]