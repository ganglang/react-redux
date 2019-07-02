export let combineReducers=(obj)=>(state,action)=>{
        let newState={};
        for(let p in obj){
            //console.log("obj:"+obj['todo'](state={list:[]},{type:'ADD'}));
            newState[p]=obj[p](state[p],action);
        }
        return newState;
    }