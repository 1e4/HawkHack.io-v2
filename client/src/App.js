import React ,{Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import { defaults } from "./Defaults"; // Get a handle to the default application settings
import './App.css';
import LandingPage from "./components/Landing/Landing";




class App extends Component{

render(){
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        </Switch>
    </BrowserRouter>
    
    );
  }
};

export default App;