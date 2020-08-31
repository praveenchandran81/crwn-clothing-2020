import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

 

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
    </Switch>
     
     
    
  );
}

export default App;
