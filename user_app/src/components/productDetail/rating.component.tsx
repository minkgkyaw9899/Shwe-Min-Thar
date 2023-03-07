import React, { FC } from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { View } from "react-native"

type Props = {
    total: number
    size?: number
}

export const Rating: FC<Props> = ({ total, size }) => {
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{ flexDirection: "row" }}>
            {[...Array(total)].map((_, index) => (
                <Icon
                    key={index}
                    name={"star"}
                    size={!size ? 20 : size}
                    color="orange"
                />
            ))}
        </View>
    )
}
