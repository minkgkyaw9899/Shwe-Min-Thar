import React from "react"
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
    Text,
} from "@ui-kitten/components"
import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { CartScreen, ShopScreen, WhiteListScreen } from "screens"
import ProfileScreen from "screens/profile.screen"
import {
    CartIcon,
    HeartIcon,
    HeartOutlineIcon,
    HomeIcon,
    HomeOutlineIcon,
    PersonIcon,
    PersonOutlineIcon,
} from "components/miscellaneous/Icons.component"
import { TabBarParamsList } from "types/navigation/types"
import { View } from "react-native"
import { useAppSelector } from "hooks"
import { selectedCart } from "actions"

const { Navigator, Screen } = createBottomTabNavigator<TabBarParamsList>()

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => {
    const { totalItem } = useAppSelector(selectedCart)

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
                icon={
                    selectedIndex === 2
                        ? CartIcon
                        : (props) => {
                              return totalItem ? (
                                  <View>
                                      <Icon
                                          {...props}
                                          name="shopping-cart-outline"
                                      />
                                      <View
                                          style={{
                                              height: 15,
                                              width: 15,
                                              backgroundColor: "blue",
                                              borderRadius: 10,
                                              position: "absolute",
                                              right: 0,
                                              top: -2,
                                          }}
                                      >
                                          <Text
                                              style={{
                                                  color: "#fff",
                                                  textAlign: "center",
                                                  fontSize: 10,
                                              }}
                                          >
                                              {totalItem}
                                          </Text>
                                      </View>
                                  </View>
                              ) : (
                                  <Icon
                                      {...props}
                                      name="shopping-cart-outline"
                                  />
                              )
                          }
                }
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
