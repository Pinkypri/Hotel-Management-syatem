const initialState={
    users:[],
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_USER":
            return {
                users:[...state.users,action.user],
            };
            case "DELETE_USER":
                const temp=state.users.filter((user,index)=>{
                    return index !== action.id;
                });
                return{
                    users:[...temp]
                }
                case "EDIT_USER":
                    const removeUser=state.users.filter((user,index)=>{
                        return index !== action.id;
                    });
                    const editUser=state.users.filter((user,index)=>{
                        return index === action.id;
                    });
                    return{
                        edit:[...editUser],
                        users:[...removeUser]
                    }
                
            default:
                return state;
    }
}

export default reducer