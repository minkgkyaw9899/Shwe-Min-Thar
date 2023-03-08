/* eslint-disable react-native/no-inline-styles */
import React, { FC, useEffect, useState } from "react"
import {
    Image,
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native"
import { ProductDetailScreenProps } from "types/navigation/types"
import { SharedElement } from "react-navigation-shared-element"
import { deviceWidth } from "utils"
import { Button, Text } from "@ui-kitten/components"
import { ColorPicker, Rating, SizeSelector } from "components/productDetail"
import NumericInput from "react-native-numeric-input"
import { ArrowBackIcon, CartIcon } from "components/miscellaneous"
import VectorIcon from "react-native-vector-icons/Ionicons"
import {
    addItem,
    addToWhitelist,
    removeFromWhitelist,
    selectAuthUser,
    selectWhitelist,
} from "actions"
import { useAppDispatch, useAppSelector } from "hooks"
import { useToast } from "react-native-toast-notifications"
import _ from "lodash"
import { fakeDataApi } from "api"

type Product = {
    id: number
    name: string
    description: string
    price: number
    category: string
    source: any
}

const ProductDetail: FC<ProductDetailScreenProps> = ({
    navigation,
    route: { params },
}) => {
    const { products } = useAppSelector(selectWhitelist)

    const { token } = useAppSelector(selectAuthUser)

    const dispatch = useAppDispatch()

    const [product, setProduct] = useState<Product>({
        id: 0,
        name: "",
        description: "",
        price: 0,
        category: "",
        source: require("../assets/img/404.png"),
    })

    const [whitelistedProduct, setWhitelistedProduct] = useState<
        Product | undefined
    >(undefined)
    const [totalStack, setTotalStack] = useState<number>(1)
    const [chosenColor, setChosenColor] = useState<string | undefined>(
        undefined
    )
    const [chosenSize, setChosenSize] = useState<string | number | undefined>(
        undefined
    )

    const toast = useToast()

    useEffect(() => {
        const existingProduct = _.find(
            fakeDataApi.products,
            (p) => p.id === params.id
        )
        existingProduct && setProduct(existingProduct)
        setWhitelistedProduct(products?.find((p) => p.id === product?.id))
    }, [params.id, product?.id, products])

    const showErrorToast = () => {
        if (!chosenColor || !chosenSize)
            return toast.show("Please select size and color", {
                type: "warning",
                placement: "bottom",
                duration: 1000,
            })
    }

    const showSuccessToast = () => {
        return toast.show("Successfully added to cart", {
            type: "success",
            placement: "bottom",
            duration: 1000,
        })
    }

    const addToCart = () => {
        showErrorToast()

        const data = _.omit(product, ["description"])

        if (!data) {
            return
        } else if (!chosenSize || !chosenColor) {
            return
        }

        dispatch(
            addItem({
                ...data,
                size: chosenSize,
                color: chosenColor,
                quantity: totalStack,
                totalPrice: Math.round(totalStack * data.price),
            })
        )
        return showSuccessToast()
    }

    const toggleBtn = () => {
        return !whitelistedProduct
            ? dispatch(addToWhitelist(product))
            : dispatch(removeFromWhitelist(product.id))
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <View style={styles.header}>
                    <SharedElement id={params.id.toString()}>
                        <Image
                            resizeMode={"contain"}
                            style={styles.img}
                            source={product.source}
                            alt={product?.name}
                        />
                    </SharedElement>
                    {/*    back action */}
                    <Button
                        onPress={() => navigation.goBack()}
                        style={styles.backBtn}
                        appearance={"ghost"}
                        accessoryLeft={ArrowBackIcon}
                    />
                    <TouchableOpacity
                        style={styles.loveIcon}
                        onPress={toggleBtn}
                        disabled={!token}
                    >
                        <VectorIcon
                            name={
                                whitelistedProduct ? "heart" : "heart-outline"
                            }
                            color={"red"}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.detailContainer}>
                    <View style={styles.productNameAndPrice}>
                        <Text category={"h4"} style={{ marginTop: 20 }}>
                            {product?.name}
                        </Text>
                        <Text
                            category={"h4"}
                            appearance={"hint"}
                            style={{ marginTop: 20 }}
                        >
                            $&nbsp;{String(product?.price)}
                        </Text>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Rating total={4} />
                    </View>

                    <View
                        style={{
                            marginVertical: 10,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <NumericInput
                            onChange={(value) => setTotalStack(value)}
                            minValue={1}
                            maxValue={20}
                            totalHeight={35}
                            totalWidth={150}
                            iconSize={25}
                            rounded
                            // leftButtonBackgroundColor
                            value={totalStack}
                        />

                        <Text category={"h5"}>
                            $&nbsp;
                            {!product?.price
                                ? 0
                                : Math.round(totalStack * product.price)}
                        </Text>
                    </View>

                    <View
                        style={{
                            marginVertical: 10,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text> Choose color :&nbsp;</Text>
                        <ColorPicker
                            colors={[
                                "blue",
                                "green",
                                "orange",
                                "black",
                                "white",
                            ]}
                            chosenColor={chosenColor}
                            setChosenColor={setChosenColor}
                        />
                    </View>

                    <View
                        style={{
                            marginVertical: 10,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text> Choose size :&nbsp;</Text>
                        <SizeSelector
                            isShoe={product?.category === "Shoes"}
                            setChosenSize={setChosenSize}
                        />
                    </View>

                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <Button
                            onPress={addToCart}
                            accessoryLeft={CartIcon}
                            appearance={"outline"}
                            status={"basic"}
                            style={{ marginRight: 10 }}
                        >
                            Add to cart
                        </Button>

                        <Button
                            // onPress={() => }
                            status={"primary"}
                            style={{ marginLeft: 10 }}
                        >
                            Buy now
                        </Button>
                    </View>

                    <Text category={"s2"} style={{ marginVertical: 10 }}>
                        {product?.description}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    header: {
        position: "relative",
    },
    img: { width: deviceWidth, height: 300 },
    backBtn: {
        position: "absolute",
        backgroundColor: "#c9c9c9",
        borderColor: "transparent",
        borderWidth: 2,
        borderRadius: 10,
        top: 10,
        left: 10,
    },
    loveIcon: { position: "absolute", top: 18, right: 20 },
    detailContainer: { marginHorizontal: 10 },
    productNameAndPrice: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
})
