import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload);
        },
        removeUser(state, action){
            state.splice(action.payload, 1);
        },
        removeAllUser(state, action){
            return [];
        }
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.removeAllUser, ()=>{
            return [];
        })
    // Extra Reducer is used when we have one reducer created and the same functionality is to be used in other slice file so we can create Extra reducer. 
    // Here it will not consider the extra Reducer.
    }
})

export default userSlice.reducer;
export const {addUser, removeUser, removeAllUser} = userSlice.actions; 