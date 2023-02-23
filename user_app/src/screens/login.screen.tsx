/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react"
import { TouchableOpacity, View } from "react-native"
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackParamsList } from "navigation/appStack.navigator"
import { KeyboardAvoidingView, LoginForm } from "components"
import LoginSvg from "../assets/svg/login.svg"

export type LoginScreenProps = NativeStackScreenProps<AppStackParamsList, "Login">

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
    const styles = useStyleSheet(themeStyle)

    return (
        <KeyboardAvoidingView>
            <View style={styles.header}>
                <LoginSvg width={100} height={100} />
                <Text style={styles.headerText} category={"h3"}>
                    Login
                </Text>
                <Text category="s1">Welcome back again</Text>
            </View>
            <LoginForm />

            <View style={styles.bottomGroup}>
                {/* google button */}

                {/* register navigation */}
                <View style={styles.navContainer}>
                    <Text style={{ textAlign: "center" }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text style={{ color: "blue" }}> Create now </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const themeStyle = StyleService.create({
    root: {
        backgroundColor: "#fff",
    },
    header: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 8,
    },
    headerText: { marginBottom: 10, marginTop: 20 },
    bottomGroup: {
        flex: 1,
        justifyContent: "space-between",
    },
    navContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
})

export default LoginScreen
