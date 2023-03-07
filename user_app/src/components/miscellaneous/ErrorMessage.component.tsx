import { Text } from "react-native"
import React from "react"

export const ErrorMessage = (props: any) => {
    return <Text {...props}>{props.error?.message}</Text>
}
