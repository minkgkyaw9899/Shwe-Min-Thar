import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "store"

interface AuthUser {
    avatarUrl?: string
    email: string | undefined
    name: string | undefined
    password?: string
    token: string | undefined
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
        addAvatar: (state, action: PayloadAction<string | undefined>) => {
            state.avatarUrl = action.payload
        },
        login: (state, action: PayloadAction<Omit<AuthUser, "avatarUrl">>) => {
            state.email = action.payload.email
            state.password = action.payload.password
            state.token = action.payload.token
            state.name = action.payload.name
        },
        logOut: (state) => {
            state.avatarUrl = undefined
            state.email = undefined
            state.password = undefined
            state.token = undefined
            state.name = undefined
        },
    },
})

export const { addAvatar, login, logOut } = authUserSlice.actions

export const selectAuthUser = (state: RootState) => state.authUser

export default authUserSlice.reducer
