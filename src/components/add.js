import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';
class Add extends Component{
    constructor(props){
        super(props);
        this.state={
            blocking:false
        }
    }
    handleSubmit=()=>{
        let name=this.name.value;
        let userList=localStorage.getItem('users');
        let list=userList?JSON.parse(userList):[];
        list.push({name:name,id:Date.now()});
        localStorage.setItem('users',JSON.stringify(list));
        this.setState({
            blocking:false
        },()=>{ this.props.history.push("/user/list");})
    }
    handleChange=(event)=>{
        if(event.target.value&&event.target.value.length>0){
            this.setState({
                blocking:true
            })
        }
    }
    render() {
        // eslint-disable-next-line react/react-in-jsx-scope
        return(
            <div>
                <Prompt when={this.state.blocking} message={(location)=>`你是否要跳转到${location.pathname}页面？`}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">用户名:</label>
                        <input type="text" className="form-control" ref={(ref)=>this.name=ref} onChange={this.handleChange}/>
                    </div>
                   <div className="form-group">
                       <button type="submit" className="btn btn-primary">提交</button>
                   </div>
                </form>
            </div>
        )

    }
}

export default Add;