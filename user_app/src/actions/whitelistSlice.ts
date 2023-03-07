import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "store"

interface Product {
    id: number
    name: string
    price: number
    category: string
    source: any
    description: string
}
const initialState = {
    products: [] as Product[],
}

const whitelistSlice = createSlice({
    name: "whitelist",
    initialState,
    reducers: {
        addToWhitelist: (state, action: PayloadAction<Product>) => {
            const existedProduct =
                state.products &&
                state.products?.find(
                    (product) => product.id === action.payload.id
                )

            if (existedProduct)
                return {
                    products: [...state.products],
                }

            state.products?.push(action.payload)
        },
        removeFromWhitelist: (state, action: PayloadAction<number>) => {
            state.products = state.products?.filter((product) => product.id !== action.payload)
        },
        removeAll: () => {
            return initialState
        },
    },
})

export const { addToWhitelist, removeAll, removeFromWhitelist } =
    whitelistSlice.actions

export const selectWhitelist = (state: RootState) => state.whitelist

export default whitelistSlice.reducer
