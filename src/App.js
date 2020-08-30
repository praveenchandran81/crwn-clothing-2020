import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';

const HatsPage= ()=>(
  <div>
    hats page
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop/hats' component={HatsPage}></Route>
    </Switch>
     
     
    
  );
}

export default App;
