import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from './untils/provider';
import * as serviceWorker from './serviceWorker';
import {createStore} from './untils/redux';
import {combineReducers} from './untils/combineReducer';
import {todoReducer} from './reducers/todoReducer';
import {counterReducer} from './reducers/counterReducer';
import {applyMiddleWare} from "./untils/middleware";
//12行处combineReducers里的参数要写成{'todo':todoReducer,'count':counterReducer}，不能写成{todo:todoReducer,count:counterReducer}，不然在./untils/combineReducer.js的5行的位置报'todo'undefined的错误
let reducer=combineReducers({'todo':todoReducer,'count':counterReducer});
//let store=createStore(reducer); //使用中间件的话，store不是这样生成的
let logger1=store=>next=>action=>{
    console.log("logger1 before:"+store.getState().count.count);
    next(action);
    console.log("logger1 after:"+store.getState().count.count);
}
let logger2=store=>next=>action=>{
    console.log("logger2 before:"+store.getState().count.count);
    next(action);
    console.log("logger2 after:"+store.getState().count.count);
}
let store=applyMiddleWare([logger1,logger2])(createStore)(reducer);
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();