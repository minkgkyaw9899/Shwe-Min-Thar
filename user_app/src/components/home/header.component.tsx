import React from "react"
import { Text, TopNavigation } from "@ui-kitten/components"
import { useNavigation } from "@react-navigation/native"
import { ShopScreenProps } from "types/navigation/types"
import { RightHeaderIcon } from "./RightHeaderIcon.component"
import { DrawerAction } from "components/drawer"
import { StyleSheet, TextProps } from "react-native"

const Title = (props?: TextProps) => (
    <Text {...props} style={styles.title} category={"h6"}>
        Shwe Min Thar
    </Text>
)

export const Header = () => {
    const navigation = useNavigation<ShopScreenProps>()

    return (
        <TopNavigation
            accessoryLeft={
                // @ts-ignore
                <DrawerAction toggleDrawer={navigation.toggleDrawer} />
            }
            title={Title}
            accessoryRight={RightHeaderIcon}
            // style={{ position: "absolute", zIndex: 1 }}
        />
    )
}

const styles = StyleSheet.create({
    title: { textTransform: "capitalize" },
})
