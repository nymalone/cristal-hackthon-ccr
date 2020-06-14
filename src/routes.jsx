import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NewPassword from './pages/NewPassword';
import Dashboard from './pages/Dashboard';
import Destination from './pages/Destination';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/newpassword" component={NewPassword} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/destination" component={Destination} />
    </BrowserRouter>
  );
};

export default Routes;
