import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            todoList:localStorage.getItem('todoList')?JSON.parse(localStorage.getItem('todoList')):[]
        }
    }
    componentWillMount() {
       this.unsubscribe=this.context.store.subscribe(()=>{
            this.setState({
                todoList:this.context.store.getState().todo.list
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    delete=function (id){
        let list=this.state.todoList;
        list.forEach((item,n)=>{if(item.id===id)list.splice(n,1)});
        this.setState({
            todoList:list
        })
        console.log(list);
    }
    addList=(event)=>{
        let list=this.state.todoList;
        if(event.keyCode===13){
            this.context.store.dispatch({'type':'increase',thing:event.target.value,id:Date.now()});
            event.target.value='';
        }
    }
    render() {
        return (<div className="todoWrap">
            <input type="text" onKeyDown={this.addList}/>
            <div className="content">
                {this.state.todoList.length>0? <ul>
                    {this.state.todoList.map((list)=><li key={list.id}>{list.thing} <button onClick={this.context.store.dispatch.bind(this,{type:'decrease',id:list.id})}>删除</button></li>)}
                </ul>:<div>没有待办事项哦~</div>}
            </div>
        </div>)
    }
}
Todo.contextTypes={
    store:PropTypes.object
}
export default Todo;