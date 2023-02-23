import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import { Icon } from "@ui-kitten/components"

export const UserIcon = (props: any) => {
    return <Icon name="person" {...props} />
}
export const EmailIcon = (props: any) => {
    return <Icon name={"email"} {...props} />
}

export const LockIcon = (props: any) => {
    return <Icon name={"lock"} {...props} />
}

export const AlertTriangleIcon = (props: any) => {
    return <Icon name={"alert-triangle"} {...props} />
}

export const EyeIcon = (props: any) => {
    const { secureText, setSecureText } = props
    return (
        <TouchableWithoutFeedback onPress={() => setSecureText(!secureText)}>
            <Icon {...props} name={secureText ? "eye-off" : "eye"} />
        </TouchableWithoutFeedback>
    )
}

export const CameraIcon = (props: any) => {
    return <Icon name={"camera"} {...props} />
}
