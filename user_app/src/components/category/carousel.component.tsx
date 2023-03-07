import React, { FC } from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import Carousel from "react-native-reanimated-carousel"
import { fakeDataApi } from "api"

type Props = {
    category: "Watches" | "Hoodies" | "Shirts" | "Shoes"
}
export const CarouselProducts: FC<Props> = ({ category }) => {
    const width = Dimensions.get("window").width
    return (
        <View style={styles.root}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={fakeDataApi.products.filter(
                    (product) => product.category === category
                )}
                scrollAnimationDuration={1500}
                autoPlayInterval={5000}
                snapEnabled={true}
                overscrollEnabled={true}
                windowSize={3}
                renderItem={({
                    item,
                }: {
                    item: {
                        id: number
                        source: any
                    }
                }) => {
                    return (
                        <View style={styles.innerContainer}>
                            <Image
                                style={{
                                    width: width,
                                    height: width / 2,
                                }}
                                resizeMode={"contain"}
                                source={item.source}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: { flex: 1 },
    innerContainer: {
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
    },
})
