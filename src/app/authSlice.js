import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}
const renderInitialState ={
    login: null,
    register: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

const renderSlice = createSlice({
    name:"render",
    renderInitialState,
    reducers:{
        loginComp:(state,action)=>{
            state.login = action.payload;
        },
        registerComp:(state,action)=>{
            state.register= action.payload;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;