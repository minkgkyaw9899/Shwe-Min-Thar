import React, { FC } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

interface Props {
    colors: string[]
    chosenColor?: string
    setChosenColor: (color: string) => void
}

export const ColorPicker: FC<Props> = ({
    colors,
    chosenColor,
    setChosenColor,
}: Props) => {
    return (
        <View style={styles.root}>
            {colors.map((color, index) => (
                <TouchableOpacity
                    onPress={() => setChosenColor(color)}
                    key={index}
                    style={[
                        styles.btn,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {
                            borderColor:
                                chosenColor === color
                                    ? chosenColor
                                    : "transparent",
                        },
                    ]}
                >
                    <View
                        style={[
                            styles.container,
                            {
                                backgroundColor: color,
                            },
                        ]}
                    />
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    root: { flexDirection: "row" },
    btn: {
        borderRadius: 100,
        borderWidth: 3,
        width: 26,
        height: 26,
        marginHorizontal: 4,
    },
    container: {
        width: 20,
        height: 20,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 100,
    },
})
