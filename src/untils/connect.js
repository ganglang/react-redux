import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
let store;
let connect=(mapStateToProps,mapDispatchToProps)=>(_component)=>{
    class Proxy extends Component{
        constructor(props){
            super(props);
            this.state=mapStateToProps(this.context.store.getState());
        }
        componentWillMount(){
            this.unsubscribe=store.subscribe(()=>{
                this.state=store.getState();
            })
        }
        componentWillUnmount(){
            this.unsubscribe();
        }
        render(){
            return <_component {...this.state} {...mapDispatchToProps(store.dispatch)} />
        }
    }
    Proxy.contextTypes={
        store:PropTypes.object
    }
    return Proxy;
}


let mapStateToProps=(state)=>{
    return state;
}

let mapDispatchToProps=(dispatch)=>({
    'add':(...args)=>dispatch(...args)
})