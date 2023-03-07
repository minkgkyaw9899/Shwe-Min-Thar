/* eslint-disable react/no-unstable-nested-components,react-native/no-inline-styles */
import React, { FC } from "react"
import { Card, Divider, Layout, Text } from "@ui-kitten/components"
import { ProductListScreenProps } from "types/navigation/types"
import { Header } from "components/productsList"
import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native"
import VectorIcon from "react-native-vector-icons/Ionicons"
import { deviceWidth } from "utils"
import { fakeDataApi } from "api"
import { useAppDispatch, useAppSelector } from "hooks"
import {
    addToWhiteList,
    removeFromWhiteList,
    selectAuthUser,
    selectWhitelist,
} from "actions"

interface Product {
    id: number
    name: string
    category: string
    source: any
    price: number

    description: string
}
const ProductList: FC<ProductListScreenProps> = ({ route, navigation }) => {
    const data =
        route.params.category === "All"
            ? fakeDataApi.products
            : fakeDataApi.products.filter(
                  (product) => product.category === route.params.category
              )

    const dispatch = useAppDispatch()

    const products = useAppSelector(selectWhitelist)

    const { token } = useAppSelector(selectAuthUser)

    const CardItem = ({ item }: { item: Product }) => {
        const product = products.find((p) => p.id === item.id)

        const toggleBtn = () => {
            return !product
                ? dispatch(addToWhiteList(item))
                : dispatch(removeFromWhiteList(item.id))
        }

        return (
            <Card
                style={styles.card}
                onPress={() =>
                    navigation.navigate("ProductDetail", { id: item.id })
                }
            >
                <View style={styles.cardContent}>
                    <Image
                        style={{ width: 130, height: 200 }}
                        resizeMode={"center"}
                        resizeMethod={"scale"}
                        source={item.source}
                    />

                    <View style={styles.cardRightSideContainer}>
                        <Text>{item.name}</Text>
                        {/**/}
                        <Text>
                            3.00 &nbsp;
                            {
                                <VectorIcon
                                    name="star"
                                    color={"orange"}
                                    size={14}
                                />
                            }
                        </Text>
                        <View style={styles.cardPriceContainer}>
                            <Text>${item.price}</Text>
                            <TouchableOpacity
                                onPress={toggleBtn}
                                disabled={!token}
                            >
                                <VectorIcon
                                    name={product ? "heart" : "heart-outline"}
                                    size={25}
                                    color={"red"}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Card>
        )
    }
    return (
        <Layout>
            <Header title={route.params.name} />
            <Divider />
            <FlatList
                data={data}
                renderItem={CardItem}
                keyExtractor={(item) => item.id.toString()}
                initialNumToRender={4}
                style={{ marginVertical: 10, marginBottom: 75 }}
                ItemSeparatorComponent={() => (
                    <View style={{ marginVertical: 4 }} />
                )}
            />
        </Layout>
    )
}

export default ProductList

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: deviceWidth,
    },
    card: {
        width: deviceWidth,
        borderRadius: 10,
        elevation: 2,
        marginVertical: 2,
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
        alignItems: "center",
        maxWidth: deviceWidth,
        height: 120,
    },
    cardRightSideContainer: {
        width: "65%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        marginLeft: 8,
    },
    cardPriceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 8,
    },
})
