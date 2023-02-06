const eachOne = (state=[], action)=>{
    switch(action.type){
        case "Each":
            return state=[action.payload]
default:
    return state
}}

export default eachOne;