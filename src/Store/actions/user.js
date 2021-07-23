export const addUser=(user)=>{
    return{
        type:"ADD_USER",
        user:user,
    }
}

export const deleteUser=(id)=>{
    return{
        type:"DELETE_USER",
        id:id,
    }
}

export const editUser=(id)=>{
    return{
        type:"EDIT_USER",
        id:id,
    }
}
