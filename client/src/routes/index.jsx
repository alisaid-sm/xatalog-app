// import { useState } from "react";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
// import { useSelector } from "react-redux";
// import PrivateRoute from "../component/Route/PrivateRoute";
// import PublicRoute from "../component/Route/PublicRoute";
// import { Header, Footer, Sidebar } from '../pages/template/template';
import Test from '../pages/Test'

export default function Router() {
  // let { Auth, Navbar } = useSelector(state => state);

  // const [ isActiveBars, setIsActiveBars ] = useState(false);
  // const toggleBar = () => {
  //   setIsActiveBars( !isActiveBars )
  // }

  return (
    <BrowserRouter>
        {/* {Navbar.isActiveNav? <Header burgerClick={ toggleBar } /> : null } */}
        <Switch>
          {/* <PublicRoute path="/login" restricted={true} component={ SplashScreen } /> */}
          <Route path='/' component={Test} />
          {/* { (!Auth.haveSholawat) ? <PrivateRoute path="/yuk-baca-sholawat" exact component={ YukBacaSholawat } /> : null } */}
        </Switch>
        {/* <Switch>
          <Redirect from='*' to='/' />
        </Switch> */}
    </BrowserRouter>
  );
}