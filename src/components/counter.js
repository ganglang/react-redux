//35行那里注意，开始时写成“this.context.store.dispatch({type:'ADD'})”，然后页面在24行的位置报'Maximum update depth exceeded.'的错误，改成"this.context.store.dispatch.bind(this,{type:'ADD})"就好
import React,{Component} from 'react';
import PropTypes from 'prop-types'; //此处是 “PropTypes”，而不是“{PropTypes}”
import {applyMiddleWare} from '../untils/middleware';
import {createStore} from "../untils/redux";
import {todoReducer} from "../reducers/todoReducer";
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:localStorage.getItem('count')?JSON.parse(localStorage.getItem('count')):0 //此处不能写成“count:this.context.store.getState().count.count”，会报“store undefined”的错误
        }
    }
    /*add=()=>{
        this.setState({
             count:this.state.count+1
        })
    }
    sub=()=>{
        this.setState({
            count:this.state.count-1
        })
    }*/
    componentWillMount() {
        this.unsubscribe=this.context.store.subscribe(()=>{
            this.setState({
                count:this.context.store.getState().count.count
            })
        });

    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (<div className="counter">
            <button onClick={this.context.store.dispatch.bind(this,{type:'SUB'})}>-</button>
            <span className="showCount"> {this.state.count}</span>
            <button onClick={this.context.store.dispatch.bind(this,{type:'ADD'})}>+</button>
        </div>)
    }
}
Counter.contextTypes={
    store:PropTypes.object
}
export default Counter;