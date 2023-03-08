import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "store"

export interface CartItem {
    id: number
    name: string
    price: number
    category: string
    source: any
    color: string
    size: string | number
    quantity: number
    totalPrice: number
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalItem: 0,
        totalAmount: 0,
        items: [] as CartItem[],
    },
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.color === action.payload.color &&
                    item.size === action.payload.size
            )

            if (existingItem) {
                state.totalItem = state.totalItem + action.payload.quantity
                existingItem.quantity += action.payload.quantity
                state.totalAmount =
                    state.totalAmount + action.payload.totalPrice
            } else {
                console.log(action.payload.totalPrice)
                state.totalItem = state.totalItem + action.payload.quantity
                state.totalAmount =
                    state.totalAmount + action.payload.totalPrice
                state.items.push(action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<CartItem>) => {
            state.items = state.items.filter(
                (item) =>
                    item.id !== action.payload.id ||
                    item.color !== action.payload.color ||
                    item.size !== action.payload.size
            )
            state.totalItem = state.totalItem - action.payload.quantity
            state.totalAmount = state.totalAmount - action.payload.totalPrice
        },
        clearItems: (state) => {
            console.log(state)
            state.items = []
            state.totalItem = 0
            state.totalAmount = 0
        },
    },
})

export const { addItem, removeItem, clearItems } = cartSlice.actions

export const selectedCart = (state: RootState) => state.cart

export default cartSlice.reducer
