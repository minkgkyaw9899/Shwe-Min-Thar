import { IconProps } from "@ui-kitten/components"
import React from "react"
import { StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/EvilIcons"

interface Props {
    name: string
    style: IconProps
}

export const EvilIconsPack = {
    name: "evil",
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
    toReactElement: (props: any) => EvilIcon({ name, ...props }),
})

function EvilIcon({ name, style }: Props) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style)
    return (
        <Icon name={name} size={height} color={tintColor} style={iconStyle} />
    )
}
