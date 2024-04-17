import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        dob: (new Date()).toISOString().split('T')[0],
        email: "",
        role: "USER" }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        resetUser: (state) => {
            state.user = initialState.user;
        }
    }
});

export const {setUser, resetUser} = userSlice.actions;
export default userSlice.reducer;