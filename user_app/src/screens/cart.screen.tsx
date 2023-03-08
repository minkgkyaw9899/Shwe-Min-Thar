import React, { FC } from "react"
import { DrawerAction } from "components/drawer"
import {
    Button,
    Card,
    Modal,
    Text,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components"
import { CartScreenProps } from "types/navigation/types"
import { FlatList, Image, StyleSheet, View } from "react-native"
import { useAppDispatch, useAppSelector } from "hooks"
import { clearItems, removeItem, selectedCart } from "actions"
import { TrashIcon, TrashOutlineIcon } from "components/miscellaneous"
import { useToast } from "react-native-toast-notifications"

const modalStyles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
})

const CartScreen: FC<CartScreenProps> = ({ navigation: { toggleDrawer } }) => {
    const [visible, setVisible] = React.useState(false)

    const toast = useToast()

    const dispatch = useAppDispatch()

    const cartItems = useAppSelector(selectedCart)

    // eslint-disable-next-line react/no-unstable-nested-components
    const DeleteAllCartItems = (props: any) => (
        <TopNavigationAction
            {...props}
            icon={TrashIcon}
            onPress={() => {
                return cartItems.totalItem === 0
                    ? toast.show("No items in cart", {
                          placement: "bottom",
                          type: "normal",
                          duration: 1000,
                      })
                    : setVisible(true)
            }}
        />
    )

    return !cartItems.totalItem ? (
        <View>
            <Text>Go shopping</Text>
        </View>
    ) : (
        <View style={styles.root}>
            <TopNavigation
                accessoryLeft={<DrawerAction toggleDrawer={toggleDrawer} />}
                accessoryRight={DeleteAllCartItems}
                title={"Cart"}
            />
            <Modal
                visible={visible}
                backdropStyle={modalStyles.backdrop}
                onBackdropPress={() => setVisible(false)}
            >
                <Card disabled={true}>
                    <Text appearance={"hint"} category={"h6"}>
                        Do you want to delete all item?
                    </Text>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginTop: 15,
                        }}
                    >
                        <Button
                            status={"danger"}
                            appearance={"outline"}
                            onPress={() => {
                                dispatch(clearItems())
                                setVisible(false)
                            }}
                        >
                            Delete
                        </Button>
                        <Button
                            status={"primary"}
                            appearance={"filled"}
                            onPress={() => setVisible(false)}
                        >
                            Cancel
                        </Button>
                    </View>
                </Card>
            </Modal>
            <View style={{ flex: 1, paddingTop: 15, paddingHorizontal: 5 }}>
                <FlatList
                    data={cartItems.items}
                    renderItem={({ item, index }) => {
                        console.log(item)
                        return (
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
                                        justifyContent: "space-around",
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
                                        <Text category={"h6"}>{item.name}</Text>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Text>Color&nbsp;:&nbsp;</Text>
                                            <View
                                                style={{
                                                    borderColor: item.color,
                                                    width: 15,
                                                    height: 15,
                                                    backgroundColor: item.color,
                                                    borderRadius: 50,
                                                }}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Text>Size&nbsp;:&nbsp;</Text>
                                            <Text> {item.size}</Text>
                                        </View>
                                        <Text>
                                            Quantity&nbsp;:&nbsp;
                                            {item.quantity}
                                        </Text>
                                        <Text>
                                            Price&nbsp;&nbsp;$
                                            {item.totalPrice}
                                        </Text>
                                    </View>
                                    <View>
                                        <Button
                                            status={"danger"}
                                            appearance={"outline"}
                                            accessoryRight={TrashOutlineIcon}
                                            onPress={() =>
                                                dispatch(removeItem(item))
                                            }
                                        />
                                    </View>
                                </View>
                            </Card>
                        )
                    }}
                    keyExtractor={(_item, index) => index.toString()}
                />
            </View>
            <Button style={{ margin: 20 }}>
                <Text>Total : ${cartItems.totalAmount} | Continue to buy</Text>
            </Button>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    root: { flex: 1 },
})
