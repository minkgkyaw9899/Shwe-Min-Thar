import * as React from "react"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { AppStackNavigator } from "./appStack.navigator"
import { ToastProvider } from "react-native-toast-notifications"

const theme = {
    ...DefaultTheme,
}

const RootNavigator = () => {
    return (
        <NavigationContainer theme={theme}>
            <ToastProvider>
                <AppStackNavigator />
            </ToastProvider>
        </NavigationContainer>
    )
}

export default RootNavigator
