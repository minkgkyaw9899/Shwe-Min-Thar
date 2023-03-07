import React, { FC, useEffect, useState } from "react"
import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native"
import { Text } from "@ui-kitten/components"
import _ from "lodash"
import { fakeDataApi } from "api"
import { deviceHeight, deviceWidth } from "utils"
import { useNavigation } from "@react-navigation/native"
import { ShopScreenProps } from "types/navigation/types"

interface Props {
    title: string
}
interface Products {
    id: number
    name: string
    category: string
    source: any
    price: number
}

export const ProductsShowCase: FC<Props> = ({ title }) => {
    const [latestProducts, setLatestProducts] = useState<Products[]>([])

    useEffect(() => {
        const hoodie = _.find<Products>(fakeDataApi.products, {
            id: Math.floor(Math.random() * (24 - 19 + 1)) + 19,
        })
        const shoe = _.find<Products>(fakeDataApi.products, {
            id: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
        })
        const shirt = _.find<Products>(fakeDataApi.products, {
            id: Math.floor(Math.random() * (12 - 7 + 1)) + 7,
        })
        const watch = _.find<Products>(fakeDataApi.products, {
            id: Math.floor(Math.random() * (18 - 13 + 1)) + 13,
        })

        // @ts-ignore
        setLatestProducts([hoodie, shoe, watch, shirt])
    }, [])

    const navigation = useNavigation<ShopScreenProps>()

    // eslint-disable-next-line react/no-unstable-nested-components
    const RenderItem = ({ item }: { item: any }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    // @ts-ignore
                    navigation.navigate("ProductDetail", { id: item.id })
                }
            >
                <View style={styles.card}>
                    <Image
                        source={item.source}
                        alt={item.name}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text category={"s2"}> {item.name} </Text>
                        <Text category={"h6"}> ${item.price} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <Text category={"label"} style={styles.headerTitle}>
                    {title}
                </Text>
                <TouchableOpacity
                    onPress={() =>
                        // @ts-ignore
                        navigation.navigate("ProductList", {
                            category: "All",
                            name: title,
                        })
                    }
                >
                    <Text category={"label"} appearance={"hint"}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                <FlatList
                    data={latestProducts}
                    renderItem={RenderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={3}
                    getItemLayout={(data, index) => ({
                        length: deviceHeight / 3.4,
                        offset: (deviceHeight / 3.4) * index,
                        index,
                    })}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        height: deviceHeight / 3.5,
        justifyContent: "center",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    headerTitle: {
        textTransform: "capitalize",
    },
    cardContainer: {
        height: deviceWidth / 2,
        width: deviceWidth,
        margin: 10,
    },
    card: {
        marginHorizontal: 10,
    },
    cardImage: { width: 120, height: 130 },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
})
