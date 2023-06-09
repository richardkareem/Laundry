const userDataReducer = (state = [], action)=>{

    switch(action.type){
        case "FETCH_DATA":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default userDataReducer;