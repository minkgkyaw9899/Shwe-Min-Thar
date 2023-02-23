import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../actions/themeSlice"
import authUserReducer from "../actions/authUserSlice"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        authUser: authUserReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
