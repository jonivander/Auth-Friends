import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap'; 
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/AddFriend';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar color='dark' dark expand='md'>
          <Nav>
            <NavItem>
              <Link to='/login' className="btn btn-info float-right">Login</Link>
            </NavItem>
            <NavItem>
            <Link to='/protected'className="btn btn-info float-right">Franz Liszt</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <PrivateRoute path='/protected' component={Friends} />
          <Route path='/login' component={Login} />
          <Route path='/addFriend' component={AddFriend} /> 
          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
