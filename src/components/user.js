import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import List from './list';
import Add from './add';
import Detail from "./listDetail";
import MenuLink from './menuLink';
import SubLink from "./subLink";
class User extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="userWrap">
                <ul className="subMenu">
                    <SubLink to="/user/list" label="用户列表"/>
                    <SubLink to="/user/add" label="增加用户"/>
                </ul>
                <div className="content">
                    <Route exact path="/user/list/" component={List}/>
                    <Route path="/user/add" component={Add}/>
                    <Route  path="/user/list/listdetail/:id" component={Detail}/>
                </div>
                <div className="clear_both"></div>
            </div>
        )
    }
}

export default User;