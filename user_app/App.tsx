import React from "react"
import { Provider } from "react-redux"
import "react-native-gesture-handler"
import store, { persistor } from "store"
import * as eva from "@eva-design/eva"
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components"
import { EvaIconsPack } from "@ui-kitten/eva-icons"
import RootNavigator from "navigation"
import { useAppSelector } from "hooks"
import { selectTheme } from "actions"
import { StatusBar } from "react-native"
import {
    FeatherIconsPack,
    IonIconsPack,
    MaterialCommunityIconPack,
} from "icons"
import { PersistGate } from "redux-persist/integration/react"

const UiKit = () => {
    const theme = useAppSelector(selectTheme)
    return (
        <>
            <IconRegistry
                icons={[
                    EvaIconsPack,
                    MaterialCommunityIconPack,
                    IonIconsPack,
                    FeatherIconsPack,
                ]}
            />
            <ApplicationProvider
                {...eva}
                theme={theme === "light" ? eva.light : eva.dark}
            >
                <StatusBar
                    barStyle={
                        theme === "light" ? "dark-content" : "light-content"
                    }
                    backgroundColor={theme === "light" ? "#ffffff" : "#000000"}
                />
                <RootNavigator />
            </ApplicationProvider>
        </>
    )
}
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <UiKit />
            </PersistGate>
        </Provider>
    )
}

export default App
