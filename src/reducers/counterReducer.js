export let counterReducer=(state={count:0},action)=>{
    state.count=localStorage.getItem('count')?JSON.parse(localStorage.getItem('count')):0;
    if(!action) return {...state,count:state.count};
    switch (action.type) {
        case 'ADD':
            localStorage.setItem('count',JSON.stringify(state.count+1));
            return {...state,count:state.count+1};
            break;
        case 'SUB':
            localStorage.setItem('count',JSON.stringify(state.count-1));
            return {...state,count:state.count-1};
            break;
        default:
            return {...state}
    }
}