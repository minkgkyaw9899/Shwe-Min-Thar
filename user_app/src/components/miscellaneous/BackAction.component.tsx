import React from "react"
import { TopNavigationAction } from "@ui-kitten/components"
import { ArrowBackIcon } from "components/miscellaneous/Icons.component"

type Props = {
    goBack: () => void
}
export const BackAction = ({ goBack }: Props) => (
    <TopNavigationAction icon={ArrowBackIcon} onPress={() => goBack()} />
)
