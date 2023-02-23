import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "store"

type ThemeState = {
    mode: "light" | "dark"
}

const initialState: ThemeState = {
    mode: "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<"light" | "dark">) => {
            state.mode = action.payload
        },
    },
})

export const { toggleTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.mode

export default themeSlice.reducer
