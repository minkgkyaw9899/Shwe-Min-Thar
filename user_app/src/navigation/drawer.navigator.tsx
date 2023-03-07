import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { TabNavigator } from "./tabBar.navigator"
import CategoryDetail from "screens/categoryDetail.screen"
import { fakeDataApi } from "api"
import { DrawerParamList } from "types/navigation/types"
import { DrawerContent } from "components/drawer"

const Drawer = createDrawerNavigator<DrawerParamList>()

const DrawerContentContainer = (props: any) => <DrawerContent {...props} />

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={DrawerContentContainer}
            screenOptions={{
                headerShown: false,
                drawerType: "slide",
            }}
        >
            <Drawer.Screen name="Tab" component={TabNavigator} />
            <Drawer.Screen
                name="Hoodies"
                component={CategoryDetail}
                initialParams={{
                    data: fakeDataApi.products.filter(
                        (product: { category: string }) =>
                            product.category === "Hoodies"
                    ),
                }}
            />
            <Drawer.Screen
                name="Shirts"
                component={CategoryDetail}
                initialParams={{
                    data: fakeDataApi.products.filter(
                        (product: { category: string }) =>
                            product.category === "Shirts"
                    ),
                }}
            />
            <Drawer.Screen
                name="Shoes"
                component={CategoryDetail}
                initialParams={{
                    data: fakeDataApi.products.filter(
                        (product: { category: string }) =>
                            product.category === "Shoes"
                    ),
                }}
            />
            <Drawer.Screen
                name="Watches"
                component={CategoryDetail}
                initialParams={{
                    data: fakeDataApi.products.filter(
                        (product: { category: string }) =>
                            product.category === "Watches"
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}
