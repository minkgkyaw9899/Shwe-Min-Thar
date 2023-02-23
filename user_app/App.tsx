import React from "react"
import { Provider } from "react-redux"
import "react-native-gesture-handler"
import store from "store"
import * as eva from "@eva-design/eva"
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components"
import { EvaIconsPack } from "@ui-kitten/eva-icons"
import RootNavigator from "navigation"
import { useAppSelector } from "hooks"
import { selectTheme } from "actions"
import { StatusBar } from "react-native"

const UiKit = () => {
    const theme = useAppSelector(selectTheme)
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
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
            <UiKit />
        </Provider>
    )
}

export default App
