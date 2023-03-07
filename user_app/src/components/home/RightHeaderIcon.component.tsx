import { TopNavigationAction } from "@ui-kitten/components"
import { SearchIcon } from "components/miscellaneous"
import React from "react"

export const RightHeaderIcon = (props: any) => {
    return (
        <TopNavigationAction
            icon={SearchIcon}
            {...props}
            onPress={() => console.log("navigate to search screen")}
        />
    )
}
