import React, { FC } from "react"
import { Layout } from "@ui-kitten/components"
import { SafeAreaView, ScrollView, StyleSheet } from "react-native"
import { ShopScreenProps } from "types/navigation/types"
import {
    CategoryList,
    DiscountAndSelectionComponent,
    Header,
    ProductsShowCase,
} from "components/home"

const ShopScreen: FC<ShopScreenProps> = () => {
    return (
        <SafeAreaView style={styles.root}>
            <Header />
            <ScrollView>
                <DiscountAndSelectionComponent />
                <Layout style={styles.productContainer}>
                    <CategoryList />
                    <ProductsShowCase title={"newest product"} />
                    <ProductsShowCase title={"featured product"} />
                </Layout>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ShopScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    productContainer: {
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        paddingVertical: 10,
    },
})
