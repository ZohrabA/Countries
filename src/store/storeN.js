const storeN=(state=[], action)=>{
switch(action.type){
    case "NEV":
        return state=[...state, action.payload];
    case "SIL":
        return state=[];
    case "Sill":
        return state=state.filter(index=> index!== action.payload);
        default:
            return state
}

}

export default storeN