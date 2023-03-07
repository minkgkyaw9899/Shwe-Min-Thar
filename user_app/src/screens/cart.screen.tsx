import React, { FC } from "react"
import { DrawerAction } from "components/drawer"
import { Card, Text, TopNavigation } from "@ui-kitten/components"
import { CartScreenProps } from "types/navigation/types"
import { FlatList, Image, StyleSheet, View } from "react-native"
import { useAppDispatch, useAppSelector } from "hooks"
import { selectedCart } from "actions"
import { Swipeable } from "react-native-gesture-handler"

const CartScreen: FC<CartScreenProps> = ({ navigation: { toggleDrawer } }) => {
    // const dispatch = useAppDispatch()

    const cartItems = useAppSelector(selectedCart)

    return (
        <View style={styles.root}>
            <TopNavigation
                accessoryLeft={<DrawerAction toggleDrawer={toggleDrawer} />}
                title={"Cart"}
            />
            <View style={{ flex: 1, paddingTop: 15, paddingHorizontal: 5 }}>
                <FlatList
                    data={cartItems.items}
                    renderItem={({ item, index }) => {
                        return (
                            <Swipeable>
                                <Card
                                    key={index}
                                    style={{ marginVertical: 2 }}
                                    appearance={"filled"}
                                >
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Image
                                            style={{ width: 80, height: 80 }}
                                            source={item.source}
                                            alt={
                                                item.name +
                                                item.size +
                                                item.color +
                                                item.category
                                            }
                                        />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text category={"h6"}>
                                                {item.name}
                                            </Text>
                                            <View
                                                style={{ flexDirection: "row" }}
                                            >
                                                <Text>{item.color}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Card>
                            </Swipeable>
                        )
                    }}
                    keyExtractor={(_item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    root: { flex: 1 },
})
