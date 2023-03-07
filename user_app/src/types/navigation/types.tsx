import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native"
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { StackScreenProps } from "@react-navigation/stack"
import { DrawerScreenProps } from "@react-navigation/drawer"

export type DataProp = {
    data: {
        id: number
        name: string
        description: string
        price: number
        category: string
        source: any
    }[]
}

export type AppStackParamList = {
    Main: NavigatorScreenParams<DrawerParamList>
    Login: undefined
    Register: undefined
    ProductList: {
        name: string
        category: "Watches" | "Hoodies" | "Shirts" | "Shoes" | "All"
    }
    ProductDetail: {
        id: number
    }
}

export type DrawerParamList = {
    Tab: NavigatorScreenParams<TabBarParamsList>
    Hoodies: undefined | DataProp
    Shirts: undefined | DataProp
    Shoes: undefined | DataProp
    Watches: undefined | DataProp
}

export type TabBarParamsList = {
    Shop: undefined
    WhiteList: undefined
    Cart: undefined
    Profile: undefined
}

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>

export type RegisterScreenProps = AppStackScreenProps<"Register">

export type LoginScreenProps = AppStackScreenProps<"Login">

export type ProductListScreenProps = AppStackScreenProps<"ProductList">

export type ProductDetailScreenProps = AppStackScreenProps<"ProductDetail">

export type CategoryScreenProps = CompositeScreenProps<
    DrawerScreenProps<
        DrawerParamList,
        "Watches" | "Hoodies" | "Shirts" | "Shoes"
    >,
    AppStackScreenProps<keyof AppStackParamList>
>

export type ShopScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabBarParamsList, "Shop">,
    CompositeScreenProps<
        DrawerScreenProps<DrawerParamList, "Tab">,
        AppStackScreenProps<keyof AppStackParamList>
    >
>

export type CartScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabBarParamsList, "Cart">,
    CompositeScreenProps<
        DrawerScreenProps<DrawerParamList, "Tab">,
        AppStackScreenProps<keyof AppStackParamList>
    >
>

export type WhiteListScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabBarParamsList, "WhiteList">,
    CompositeScreenProps<
        DrawerScreenProps<DrawerParamList, "Tab">,
        AppStackScreenProps<keyof AppStackParamList>
    >
>

export type ProfileScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabBarParamsList, "Profile">,
    CompositeScreenProps<
        DrawerScreenProps<DrawerParamList, "Tab">,
        AppStackScreenProps<keyof AppStackParamList>
    >
>

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppStackParamList {}
    }
}
