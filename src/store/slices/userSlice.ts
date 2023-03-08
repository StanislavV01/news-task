import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
    isLogin: boolean
    error: boolean

}

const initialState: IUserState = {
    isLogin: false,
    error: false

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser(state) {

            state.isLogin = true;
            state.error = false;

        },
        logoutUser(state) {

            state.isLogin = false;
            state.error = false;
        },
        errorLogin(state) {
            state.error = true
        }
    }
})

export const { loginUser, logoutUser, errorLogin } = userSlice.actions;

export default userSlice.reducer;