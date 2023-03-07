import React from "react"
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components"
import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { CartScreen, ShopScreen, WhiteListScreen } from "screens"
import ProfileScreen from "screens/profile.screen"
import {
    CartIcon,
    CartOutlineIcon,
    HeartIcon,
    HeartOutlineIcon,
    HomeIcon,
    HomeOutlineIcon,
    PersonIcon,
    PersonOutlineIcon,
} from "components/miscellaneous/Icons.component"
import { TabBarParamsList } from "types/navigation/types"

const { Navigator, Screen } = createBottomTabNavigator<TabBarParamsList>()

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => {
    const selectedIndex = state.index
    return (
        <BottomNavigation
            selectedIndex={selectedIndex}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab
                title="Shop"
                icon={selectedIndex === 0 ? HomeIcon : HomeOutlineIcon}
            />
            <BottomNavigationTab
                title="WhiteList"
                icon={selectedIndex === 1 ? HeartIcon : HeartOutlineIcon}
            />
            <BottomNavigationTab
                title="Cart"
                icon={selectedIndex === 2 ? CartIcon : CartOutlineIcon}
            />
            <BottomNavigationTab
                title="Profile"
                icon={selectedIndex === 3 ? PersonIcon : PersonOutlineIcon}
            />
        </BottomNavigation>
    )
}

const TabBar = (props: JSX.IntrinsicAttributes & BottomTabBarProps) => (
    <BottomTabBar {...props} />
)

export const TabNavigator = () => (
    <Navigator
        initialRouteName={"Shop"}
        tabBar={TabBar}
        screenOptions={{
            headerShown: false,
        }}
    >
        <Screen name="Shop" component={ShopScreen} />
        <Screen name="WhiteList" component={WhiteListScreen} />
        <Screen name="Cart" component={CartScreen} />
        <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
)
