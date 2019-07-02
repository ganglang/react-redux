import React,{Component} from 'react';
class Detail extends Component{
    constructor(props){
        super(props);
    }
    render() {
        let id=this.props.match.params.id;
        let userList=localStorage.getItem('users');
        let users=userList?JSON.parse(userList):[];
        let user=users.find((user)=>user.id==id);
        console.log("user:"+user);
        return <div>{user.id}和{user.name}</div>
    }
}
export default Detail;