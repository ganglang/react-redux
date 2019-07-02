export let todoReducer=(state={list:[]},action)=>{
   state.list=localStorage.getItem('todoList')?JSON.parse(localStorage.getItem('todoList')):[];
   if(!action) return {...state,list:state.list};
    switch (action.type) {
        case 'increase':
            state.list.push({thing:action.thing,id:action.id});
            localStorage.setItem('todoList',JSON.stringify(state.list));
            return {...state,list:state.list};
        case 'decrease':
            state.list.forEach((item,n)=>{if(item.id===action.id) state.list.splice(n,1)});
           localStorage.setItem('todoList',JSON.stringify(state.list));
            return {...state,list:state.list}
        default:
            return {...state}
    }
}