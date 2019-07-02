import React from "react";
import {Route,Link} from "react-router-dom";
export default function ({to,label}) {
   return <Route path={to} children={(props)=>
     <li className={props.match?"active":""}><Link to={to}>{label}</Link></li>
   }/>
}