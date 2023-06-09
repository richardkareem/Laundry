
const loginReducer = (state = [], action)=>{
    switch(action.type){
        case "SET_LOGIN":
            return true;
            break;
        default:
            return state;
            break;
    }
}

export default loginReducer;