import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen, LoginScreen, RegisterScreen } from "screens"

export type AppStackParamsList = {
    Home: undefined
    Login: undefined
    Register: undefined
}

const Stack = createNativeStackNavigator<AppStackParamsList>()

export const AppStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Register"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_bottom",
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
