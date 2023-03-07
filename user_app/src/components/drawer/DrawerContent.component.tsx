import { DrawerContentComponentProps } from "@react-navigation/drawer"
import { useAppSelector } from "hooks"
import { selectAuthUser } from "actions"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import {
    Avatar,
    Divider,
    Drawer,
    DrawerItem,
    IndexPath,
    Text,
} from "@ui-kitten/components"
import React, { useState } from "react"
import {
    ArrowForwardIcon,
    HomeIcon,
    HomeOutlineIcon, TshirtIcon, TshirtOutlineIcon, WatchIcon, WatchOutlineIcon,
} from "components/miscellaneous/Icons.component"

const CartContent = ({
    amount,
    status,
}: {
    amount: number
    status: string
}) => {
    return (
        <TouchableOpacity>
            <View style={styles.cartContentContainer}>
                <Text status={"danger"} category={"h5"}>
                    {amount}
                </Text>
                <Text
                    category={"label"}
                    adjustsFontSizeToFit
                    style={styles.label}
                >
                    {status}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const DrawerHeader = () => {
    const { avatarUrl } = useAppSelector(selectAuthUser)

    return (
        <View>
            <View style={styles.avatarContainer}>
                <Avatar
                    style={styles.avatar}
                    source={
                        !avatarUrl
                            ? require("../../assets/img/my_baby.jpeg")
                            : { uri: avatarUrl }
                    }
                />
                <Text category={"h4"} style={styles.name}>
                    Rose
                </Text>
            </View>
            <Divider />
            <View style={styles.cartContainer}>
                <CartContent amount={0} status={"order"} />
                <CartContent amount={0} status={"cart"} />
                <CartContent amount={0} status={"reward"} />
            </View>
            <Divider />
        </View>
    )
}

export const DrawerContent = ({
    navigation,
    state,
}: DrawerContentComponentProps) => {
    const [selectedIndex, setSelectedIndex] = useState(
        new IndexPath(state.index)
    )

    const onSelect = (index: IndexPath) => {
        setSelectedIndex(new IndexPath(state.index))
        navigation.navigate(state.routeNames[index.row])
    }
    return (
        <Drawer
            selectedIndex={selectedIndex}
            onSelect={onSelect}
            header={<DrawerHeader />}
        >
            <DrawerItem
                title="Shop"
                accessoryLeft={selectedIndex ? HomeIcon : HomeOutlineIcon}
                accessoryRight={ArrowForwardIcon}
            />
            <DrawerItem
                title="Hoodies"
                accessoryLeft={selectedIndex ? TshirtIcon : TshirtOutlineIcon}
                accessoryRight={ArrowForwardIcon}
            />
            <DrawerItem
                title="Shirts"
                accessoryLeft={selectedIndex ? TshirtIcon : TshirtOutlineIcon}
                accessoryRight={ArrowForwardIcon}
            />
            <DrawerItem
                title="Shoes"
                accessoryLeft={selectedIndex ? HomeIcon : HomeOutlineIcon}
                accessoryRight={ArrowForwardIcon}
            />
            <DrawerItem
                title="Watches"
                accessoryLeft={selectedIndex ? WatchIcon : WatchOutlineIcon}
                accessoryRight={ArrowForwardIcon}
            />
        </Drawer>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 110,
        height: 110,
    },
    name: { marginBottom: 5 },
    cartContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#f3f3f3",
        paddingHorizontal: "10%",
        paddingVertical: "1%",
        marginBottom: 20,
    },
    cartContentContainer: {
        alignItems: "center",
    },
    label: { textTransform: "capitalize" },
})
