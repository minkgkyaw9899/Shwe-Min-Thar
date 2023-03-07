import { configureStore, combineReducers } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import themeReducer from "../actions/themeSlice"
import authUserReducer from "../actions/authUserSlice"
import whitelistReducer from "../actions/whitelistSlice"
import cartReducer from "../actions/cartSlice"

const rootPersistConfig = {
    key: "root",
    storage: AsyncStorage,
}

const userPersistConfig = {
    key: "authUser",
    storage: AsyncStorage,
}

const whitelistPersistConfig = {
    key: "whitelist",
    storage: AsyncStorage,
}

const cartPersistConfig = {
    key: "cart",
    storage: AsyncStorage,
}

const themePersistConfig = {
    key: "theme",
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    whitelist: persistReducer(whitelistPersistConfig, whitelistReducer),
    user: persistReducer(userPersistConfig, authUserReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    cart: persistReducer(cartPersistConfig, cartReducer),
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export default store

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
