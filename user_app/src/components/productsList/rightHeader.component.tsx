import { TopNavigationAction } from "@ui-kitten/components"
import {
    CartOutlineIcon,
    FunnelOutlineIcon,
    SearchIcon,
} from "components/miscellaneous"
import React from "react"
import { View } from "react-native"

export const RightHeaderIcon = (props: any) => {
    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                flexDirection: "row",
            }}
        >
            <TopNavigationAction
                icon={SearchIcon}
                {...props}
                onPress={() => console.log("navigate to search screen")}
            />
            <TopNavigationAction
                icon={FunnelOutlineIcon}
                {...props}
                onPress={() => console.log("navigate to search screen")}
            />
            <TopNavigationAction
                icon={CartOutlineIcon}
                {...props}
                onPress={() => console.log("navigate to search screen")}
            />
        </View>
    )
}
