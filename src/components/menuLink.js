import React from 'react';
import {Link,Route} from "react-router-dom";
//children无论route的path匹不匹配都显示
export default function ({to,label}) {
    return <Route exact path={to} children={(props)=><li className={props.match?'active':''}><Link to={to}>{label}</Link></li>}/>
}