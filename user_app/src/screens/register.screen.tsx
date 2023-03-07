/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react"
import { TouchableOpacity, View } from "react-native"
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components"
import { KeyboardAvoidingView } from "components/miscellaneous"
import { RegisterScreenProps } from "types/navigation/types"
import { RegisterForm } from "components/register"

const RegisterScreen: FC<RegisterScreenProps> = ({ navigation }) => {
    const styles = useStyleSheet(themeStyle)

    return (
        <KeyboardAvoidingView>
            <View style={styles.header}>
                <Text style={styles.headerText} category={"h3"}>
                    Shwe Min Thar
                </Text>
                <Text category="s1">Best cloth shop</Text>
            </View>
            <RegisterForm />

            <View style={styles.bottomGroup}>
                {/* google button */}

                {/* register navigation */}
                <View style={styles.navContainer}>
                    <Text style={{ textAlign: "center" }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{ color: "blue" }}> Sign in </Text>
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

export default RegisterScreen
