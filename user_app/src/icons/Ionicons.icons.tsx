import { IconProps } from "@ui-kitten/components"
import React from "react"
import { StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

interface Props {
    name: string
    style: IconProps
}

export const IonIconsPack = {
    name: "ionicons",
    icons: createIconsMap(),
}

function createIconsMap() {
    return new Proxy(
        {},
        {
            get(_target, name) {
                return IconProvider(name as string)
            },
        }
    )
}

const IconProvider = (name: string) => ({
    toReactElement: (props: any) => IoniconsIcon({ name, ...props }),
})

function IoniconsIcon({ name, style }: Props) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style)
    return (
        <Icon name={name} size={height} color={tintColor} style={iconStyle} />
    )
}
