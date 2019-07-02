import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './components/home';
import User from  './components/user';
import Profile from './components/profile';
import ProfileRoute from  './components/profileRoute';
import Login from "./components/login";
import MenuLink  from './components/menuLink';
import SubLink from "./components/subLink";
import './App.css';
function App() {
  return (
    <div className="App">
        <Router>
            <ul className="topMenu">
                <MenuLink to='/' label="首页"/>
                <SubLink to='/user/list' label="用户页面"/>
                <MenuLink to='/profile' label="个人设置"/>
            </ul>
            <div className="contentWrap">
                <Route path="/user/*" component={User}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home"  render={(props)=><div>Home</div>}/>
                    <ProfileRoute path="/profile" component={Profile}/>
                    <Route path='/login' component={Login}/>
                    <Route path="/:name" render={(props)=><div>{props.match.params.name}</div>}/>
                </Switch>
            </div>
        </Router>

    </div>
  );
}
export default App;
