// import { useState } from "react";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import { useSelector } from "react-redux";
// import PrivateRoute from "../component/Route/PrivateRoute";
// import PublicRoute from "../component/Route/PublicRoute";
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
          {/* <PublicRoute path="/login" restricted={true} component={ SplashScreen } /> */}
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/test' component={Test} />
          <Route path='/profile' component={Profile} />
          <Route path='/add' component={Add} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/' component={Home} />
          {/* { (!Auth.haveSholawat) ? <PrivateRoute path="/yuk-baca-sholawat" exact component={ YukBacaSholawat } /> : null } */}
        </Switch>
        {/* <Switch>
          <Redirect from='*' to='/' />
        </Switch> */}
    </BrowserRouter>
  );
}