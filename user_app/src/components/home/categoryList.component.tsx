import { fakeDataApi } from "api"
import { Card, Text } from "@ui-kitten/components"
import { Image, StyleSheet, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { ShopScreenProps } from "types/navigation/types"
import { deviceWidth } from "utils"

export const CategoryList = () => {
    const navigation = useNavigation<ShopScreenProps>()
    return (
        <View style={styles.root}>
            <Text style={styles.title} category={"label"}>
                All Categories
            </Text>
            <View style={styles.container}>
                {fakeDataApi.categories.map((category) => (
                    <Card
                        // @ts-ignore
                        onPress={() => navigation.navigate(category.name)}
                        key={category.id}
                        style={styles.card}
                    >
                        <Image
                            style={styles.cardImg}
                            resizeMode={"contain"}
                            source={category.source}
                        />
                        <Text style={styles.cardText} category={"s1"}>
                            {category.name}
                        </Text>
                    </Card>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        borderRadius: 10,
        paddingBottom: 10,
        marginBottom: 15,
    },
    title: { marginTop: 10, marginLeft: 20 },
    container: {
        width: deviceWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        display: "flex",
    },
    card: {
        marginVertical: 5,
        // backgroundColor: "blue",
        // width: "30%",
        alignItems: "center",
        padding: 0,
    },
    cardImg: { width: 130, height: 48 },
    cardText: { textAlign: "center", marginTop: 5 },
})
