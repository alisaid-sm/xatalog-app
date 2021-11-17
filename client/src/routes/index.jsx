// import { useState } from "react";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "../component/Route/PrivateRoute";
import PublicRoute from "../component/Route/PublicRoute";
import Header from '../component/Header/Header'
import Test from '../pages/Test'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Add from '../pages/Add'
import Edit from '../pages/Edit'

export default function Router() {
  const { Navbar } = useSelector(state => state);

  return (
    <BrowserRouter>
        { Navbar.isActiveNav? <Header /> : null }
        <Switch>
          <PublicRoute path='/login' restricted={true} component={Login} />
          <PublicRoute path='/register' restricted={true} component={Register} />
          <Route path='/test' component={Test} />
          <PrivateRoute path='/profile' exact component={Profile} />
          <PrivateRoute path='/add' exact component={Add} />
          <PrivateRoute path='/edit/:id' exact component={Edit} />
          <PrivateRoute path='/' exact component={Home} />
        </Switch>
    </BrowserRouter>
  );
}