import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import { Icon } from "@ui-kitten/components"

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

export const HomeIcon = (props: any) => <Icon name={"home"} {...props} />

export const HomeOutlineIcon = (props: any) => (
    <Icon name={"home-outline"} {...props} />
)

export const HeartIcon = (props: any) => <Icon name={"heart"} {...props} />

export const HeartOutlineIcon = (props: any) => (
    <Icon name={"heart-outline"} {...props} />
)

export const CartIcon = (props: any) => (
    <Icon name={"shopping-cart"} {...props} />
)

export const CartOutlineIcon = (props: any) => (
    <Icon name={"shopping-cart-outline"} {...props} />
)

export const PersonIcon = (props: any) => {
    return <Icon name="person" {...props} />
}
export const PersonOutlineIcon = (props: any) => (
    <Icon name={"person-outline"} {...props} />
)

export const ArrowBackIcon = (props: any) => (
    <Icon {...props} name="arrow-back" />
)

export const MenuIcon = (props: any) => <Icon {...props} name="menu-2" />

export const ArrowForwardIcon = (props: any) => (
    <Icon {...props} name="arrow-ios-forward" />
)

export const SearchIcon = (props: any) => <Icon name={"search"} {...props} />

export const TshirtIcon = (props: any) => (
    <Icon name="tshirt-v" pack="material" {...props} />
)

export const TshirtOutlineIcon = (props: any) => (
    <Icon name="tshirt-v-outline" pack="material" {...props} />
)

export const WatchIcon = (props: any) => (
    <Icon name="ios-watch" pack="ionicons" {...props} />
)

export const WatchOutlineIcon = (props: any) => (
    <Icon name="ios-watch-outline" pack="ionicons" {...props} />
)

export const FunnelOutlineIcon = (props: any) => (
    <Icon name="funnel-outline" {...props} />
)

export const StarIcon = (props: any) => <Icon name="star" {...props} />

export const TrashOutlineIcon = (props: any) => (
    <Icon name="trash-outline" {...props} />
)

export const TrashIcon = (props: any) => <Icon name="trash-2" {...props} />
