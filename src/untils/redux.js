export let createStore=(reducer)=>{
    let state={};
    let getState=()=>state;
    let listeners=[];
    let dispatch=action=>{
        state=reducer(state,action);
        listeners.forEach((l)=> l());
    }
    dispatch();
    let subscribe=listener=>{
        listeners.push(listener);
        return ()=>{listeners.map((l)=>l!==listener)}
    }
    return{
        getState,
        dispatch,
        subscribe
    }
}
