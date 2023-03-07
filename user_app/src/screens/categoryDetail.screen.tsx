import { Layout, TopNavigation } from "@ui-kitten/components"
import { BackAction } from "components/miscellaneous"
import React, { FC } from "react"
import { CategoryScreenProps } from "types/navigation/types"
import { ScrollView, StyleSheet, View } from "react-native"
import { CarouselProducts, ProductList } from "components/category"
import { deviceHeight } from "utils"

const CategoryDetail: FC<CategoryScreenProps> = ({ navigation, route }) => {
    return (
        <Layout style={styles.root}>
            <TopNavigation
                accessoryLeft={<BackAction goBack={navigation.goBack} />}
                title={route.name}
            />
            <ScrollView>
                <View style={styles.container}>
                    <CarouselProducts category={route.name} />
                    <ProductList
                        title={"newest product"}
                        category={route.name}
                    />
                    <ProductList
                        title={"latest product"}
                        category={route.name}
                    />
                </View>
            </ScrollView>
        </Layout>
    )
}

export default CategoryDetail

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
        minHeight: deviceHeight,
        paddingVertical: 20,
        justifyContent: "space-around",
    },
})
