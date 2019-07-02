import React,{Component} from 'react';
import Counter from './counter'
import Todo from "./todo";
import PropTypes from "prop-types";
class Home extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount() {
        console.log("store::"+this.context.store);
    }

    render() {
        return (<div className="homeWrap">
                    <h5>计数器</h5>
                    <Counter/>
                    <br/>
                    <h5>Todo列表</h5>
                    <Todo/>
                </div>)
    }
}
Home.contextTypes={
    store:PropTypes.object
}
export default Home;