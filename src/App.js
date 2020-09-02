import React from 'react';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInSignUp from './pages/sign-in-sign-up-page/sign-in-sign-up-component';
import {auth , createUserProfileDocument} from './firebase/firebase.util';
 

class App extends React.Component {

  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;
   

   componentDidMount(){
     //console.log(auth);
     this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
       // console.log(userAuth);
    if(userAuth){
       const userRef =  await createUserProfileDocument(userAuth);
       //console.log(userRef);
        userRef.onSnapshot((snapShot)=>{
           // console.log(snapShot);
           // console.log(snapShot.data())
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            })
        })

        this.setState({
          currentUser:userAuth
        });
        console.log(this.state);
      }
      })    
   }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }

  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      <Route path='/sign' component={SignInSignUp}></Route>
    </Switch>
     </div>
     
    
  );
  }
}

export default App;
