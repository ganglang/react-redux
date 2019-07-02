import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Provider extends Component{
    constructor(props){
        super(props);
    }
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        return (
            this.props.children
        )
    }
}
Provider.childContextTypes={
    store:PropTypes.object
}
export default Provider