let logger=store=>next=>action=>{
    console.log(store.getState());
    next(action);
    console.log(store.getState());
}

let applyMiddleWare0=middleware=>createStore=>reducer=>{
    let store=createStore(reducer);
    let middle=middleware(store); //返回的是函数
    let dispatch=middle(store.dispatch); //执行上一步返回的函数
    return {...store,dispatch};
}

let compose=(list)=>(...args)=>{
    let last=list.pop();
   return  list.reduceRight((compose,fn)=>{
       return fn(compose);
    },last(...args))
}

export let applyMiddleWare=waresList=>createStore=>reducer=>{
    let store=createStore(reducer);
    let wares=waresList.map((ware)=>ware(store));
    let dispatch=compose(wares)(store.dispatch);
    return {
        ...store,dispatch
    }
}

