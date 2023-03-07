import * as React from "react"
import {
    LoginScreen,
    RegisterScreen,
    ProductListScreen,
    ProductDetailScreen,
} from "screens"
import { DrawerNavigator } from "navigation/drawer.navigator"
import { AppStackParamList } from "types/navigation/types"
import { createSharedElementStackNavigator } from "react-navigation-shared-element"

const Stack = createSharedElementStackNavigator<AppStackParamList>()

export const AppStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                cardStyle: { backgroundColor: "transparent" },
            }}
        >
            <Stack.Screen name="Main" component={DrawerNavigator} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ProductList" component={ProductListScreen} />
            <Stack.Screen
                name={"ProductDetail"}
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    )
}
