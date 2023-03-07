import React, { FC } from "react"
import { Text, TopNavigation } from "@ui-kitten/components"
import { useNavigation } from "@react-navigation/native"
import { ShopScreenProps } from "types/navigation/types"
import { RightHeaderIcon } from "./rightHeader.component"
import { BackAction } from "components/miscellaneous"
import { StyleSheet, TextProps } from "react-native"

type Props = {
    title: string
}

const Title = (props: (TextProps | undefined) & { title: string }) => (
    <Text {...props} style={styles.title} category={"h6"}>
        {props.title}{" "}
    </Text>
)
export const Header: FC<Props> = ({ title }) => {
    const navigation = useNavigation<ShopScreenProps>()

    return (
        <TopNavigation
            accessoryLeft={
                // @ts-ignore
                <BackAction goBack={navigation.goBack} />
            }
            title={<Title title={title} />}
            accessoryRight={RightHeaderIcon}
            // style={{  }}
        />
    )
}

const styles = StyleSheet.create({
    title: { textTransform: "capitalize" },
})
