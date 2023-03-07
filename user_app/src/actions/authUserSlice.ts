import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "store"

interface AuthUser {
    avatarUrl?: string
    email?: string
    name?: string
    password?: string
    token?: string
}

const initialState = {
    avatarUrl: "",
    email: "",
    password: "",
    token: "",
} as AuthUser

const authUserSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthUser>) => {
            console.log("auth state", state)
            return {
                ...action.payload,
            }
        },
        logout: () => {
            return initialState
        },
    },
})

export const { login, logout } = authUserSlice.actions

export const selectAuthUser = (state: RootState) => state.user

export default authUserSlice.reducer
