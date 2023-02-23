import React, { FC } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackParamsList } from "navigation/appStack.navigator"
import { Button, Layout, Text } from "@ui-kitten/components"

type Props = NativeStackScreenProps<AppStackParamsList, "Home">

const HomeScreen: FC<Props> = ({ navigation }) => {
    return (
        <Layout>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate("Login")}>
                Go to login
            </Button>
        </Layout>
    )
}

export default HomeScreen
