import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import Users from "./components/Uesers";
import Contacts from "./components/Contacts";
import { Switch, Link, Route, BrowserRouter as Router, NavLink } from 'react-router-dom'
import './styles/index.css'
import NotFound from "./components/NotFound";

const router = (
    <>
        
        

        {/* <Router>
            

            <ul className="ul__container">
                <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contacts">Contacts</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/users" component={Users}></Route>
                <Route path="/contacts" component={Contacts}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router> */}
    </>
   
)

ReactDOM.render(<App/>, document.getElementById('root'))