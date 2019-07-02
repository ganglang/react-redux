import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class List extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentWillMount() {
        var userList=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
        var list=userList;
        this.setState({
            list:list
        })
    }
    render() {
        // eslint-disable-next-line react/react-in-jsx-scope
        return (<div>
            {
                this.state.list.length>0? <ul className="userList">
                    {
                        this.state.list.map((user)=><li key={user.id}><Link to={'/user/list/listdetail/' + user.id}><span className="userId">用户id：{user.id}</span>
                            <span className="userName"> 用户名：{user.name}</span></Link></li>)
                    }
                </ul>:<div>用户列表是空的</div>
            }


        </div>)
    }
}

export default List;