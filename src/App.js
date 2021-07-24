import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Customer from "./Pages/Customer/Customer";
import About from "./Pages/About/About";
import Edit from "./Pages/Edit/Edit";
import reducer from './Store/reducers/user';
import { createStore } from "redux";
import { Provider } from 'react-redux';

const store=createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/customers" exact component={Customer}/>
        <Route path="/edit" exact component={Edit}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </Router>
    </Provider>
  )
}

export default App


