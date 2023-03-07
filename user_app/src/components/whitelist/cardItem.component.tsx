import React from "react"
import { Card, Text, Button } from "@ui-kitten/components"
import { TrashOutlineIcon } from "components/miscellaneous"
import { Rating } from "components/productDetail"
import { View, Image } from "react-native"
import { useAppDispatch } from "hooks"
import { removeFromWhitelist } from "actions"
import { useNavigation } from "@react-navigation/native"
import { WhiteListScreenProps } from "types/navigation/types"

type Product = {
    id: number
    name: string
    description: string
    source: any
    category: string
    price: number
}

export const CardItem = ({
    product,
    styles,
}: {
    product: Product
    styles: any
}) => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<WhiteListScreenProps>()

    const removeProduct = () => dispatch(removeFromWhitelist(product.id))

    return (
        <Card
            onPress={() =>
                // @ts-ignore
                navigation.navigate("ProductDetail", { id: product.id })
            }
        >
            <View style={styles.card}>
                <Image source={product.source} style={styles.cardImg} />

                <View style={styles.descriptionContainer}>
                    <View style={styles.description}>
                        <Text category="h6">{product.name}</Text>
                        <Text category="s2">$ {product.price}</Text>
                        <Text appearance="hint">{product.category}</Text>
                        <Rating size={14} total={4} />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            appearance="outline"
                            status="danger"
                            accessoryLeft={TrashOutlineIcon}
                            style={styles.removeBtn}
                            onPress={removeProduct}
                        >
                            Remove
                        </Button>
                    </View>
                </View>
            </View>
        </Card>
    )
}
