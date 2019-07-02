import React from 'react';
import {Redirect,Route} from 'react-router-dom';
export default function ({component:Component,...res}) {
    return (
        // eslint-disable-next-line react/jsx-no-undef,react/react-in-jsx-scope
        <Route { ...res } render={(props)=>
            localStorage.getItem('login')?<Component/>:<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}/>
        }/>
    )
}