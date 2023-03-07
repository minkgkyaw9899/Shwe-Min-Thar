import { createElement, PropsWithChildren, type ReactElement } from "react"
import { type ScrollViewProps } from "react-native"

export const KeyboardAvoidingView = (
    props: PropsWithChildren
): ReactElement => {
    const lib = require("react-native-keyboard-aware-scroll-view")

    const defaultProps: ScrollViewProps = {
        style: {
            flex: 1,
        },
        contentContainerStyle: {
            flexGrow: 1,
        },
        bounces: false,
        bouncesZoom: false,
        alwaysBounceHorizontal: false,
        alwaysBounceVertical: false,
    }

    return createElement(lib.KeyboardAwareScrollView, {
        enableOnAndroid: true,
        ...defaultProps,
        ...props,
    })
}
