import React, { FC, useEffect } from "react"
import { TopNavigation } from "@ui-kitten/components"
import { DrawerAction } from "components/drawer"
import { WhiteListScreenProps } from "types/navigation/types"
import { useAppSelector } from "hooks"
import { selectAuthUser, selectWhitelist } from "actions"
import { FlatList, View, StyleSheet } from "react-native"
import { CardItem } from "components/whitelist"

type Product = {
    id: number
    name: string
    description: string
    source: any
    category: string
    price: number
}

const WhiteListScreen: FC<WhiteListScreenProps> = ({
    navigation: { toggleDrawer, navigate },
    route,
}: WhiteListScreenProps) => {
    const { token } = useAppSelector(selectAuthUser)

    const { products: data } = useAppSelector(selectWhitelist)

    useEffect(() => {
        if (!token) {
            navigate("Login")
        }
    }, [navigate, token])

    const _renderItem = ({ item }: { item: Product }) => {
        return <CardItem product={item} styles={styles} />
    }

    return (
        <View style={styles.root}>
            <TopNavigation
                accessoryLeft={<DrawerAction toggleDrawer={toggleDrawer} />}
                title={route.name}
            />

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={_renderItem}
                style={styles.flatList}
            />
        </View>
    )
}

export default WhiteListScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
    },
    cardImg: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    descriptionContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        // backgroundColor: "blue",
    },
    description: { justifyContent: "space-around" },
    btnContainer: {
        alignItem: "center",
        justifyContent: "center",
    },
    flatList: {
        marginVertical: 5,
    },
    removeBtn: { marginBottom: 10 },
})
