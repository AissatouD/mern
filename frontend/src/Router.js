import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddFishForm from './components/AddFishForm/AddFishForm';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Inventory' component={Inventory} />
      <Route exact path='/SignUp' component={SignUp} />
      <Route exact path='/SignIn' component={SignIn} />
      <Route exact path='/AddFish' component={AddFishForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
