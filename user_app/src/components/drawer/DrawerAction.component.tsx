import React from "react"
import { TopNavigationAction } from "@ui-kitten/components"
import { MenuIcon } from "components/miscellaneous/Icons.component"

type Props = {
    toggleDrawer: () => void
}
export const DrawerAction = ({ toggleDrawer }: Props) => (
    <TopNavigationAction icon={MenuIcon} onPress={() => toggleDrawer()} />
)
