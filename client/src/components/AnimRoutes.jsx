import React from 'react';


import Hero from '../pages/Hero';


import { AnimatePresence } from 'framer-motion'


import {Routes,Route,useLocation, Navigate} from 'react-router-dom'
import Profile from '../pages/Profile';
import Order from '../pages/Order';
import Dashboard from '../pages/Dashboard';

import PrivateRoutes from '../utils/PrivateRoutes';
import AuthRoutes from '../utils/AuthRoutes'
import Auth from '../pages/Auth';
import ProtectedAdmin from '../utils/ProtectedAdmin';
import AdminRoutes from '../utils/AdminRoutes';

const AnimRoutes = () => {

   

  
    const location = useLocation()
 return  (

    <AnimatePresence initial={true} mode='wait'>
 <Routes key={location.pathname} location={location}>




 <Route path='/' element={<Hero/>}/>
 <Route element={<AuthRoutes/>}>
 <Route path='/auth' element={<Auth/>}/>
 </Route>

<Route element={<PrivateRoutes/>}>
   <Route element={<ProtectedAdmin/>}>
 <Route path='/profile' element={<Profile/>}/>
 <Route path='/order' element={<Order/>}/>
 </Route>
 <Route element={<AdminRoutes/>}>
 <Route path='/dashboard' element={<Dashboard/>}/>
 </Route>
 </Route>
</Routes>
</AnimatePresence>
 )
};

export default AnimRoutes;
