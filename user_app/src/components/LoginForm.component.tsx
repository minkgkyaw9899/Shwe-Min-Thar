import React, { useRef } from "react"
import { useNavigation } from "@react-navigation/native"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import {
    Button,
    Input,
    Layout,
    StyleService,
    Text,
    useStyleSheet,
} from "@ui-kitten/components"
import { TouchableOpacity } from "react-native"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAppDispatch } from "hooks"
import { EmailIcon, EyeIcon, LockIcon } from "components/Icons.component"
import { LoginSchema } from "utils"
import { ErrorMessage } from "./ErrorMessage.component"
import { LoginScreenProps } from "screens/login.screen"

import { login } from "actions/authUserSlice"

interface FormState {
    email: string
    password: string
}

export const LoginForm = () => {
    const styles = useStyleSheet(themeStyle)

    const { navigation } = useNavigation<LoginScreenProps>()

    // const authUser = useAppDispatch(selectAuthUser)

    const dispatch = useAppDispatch()

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormState>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(LoginSchema),
    })

    const emailRef = useRef<Input>(null)
    const passwordRef = useRef<Input>(null)

    const [secureText, setSecureText] = React.useState<boolean>(false)

    const onSubmit: SubmitHandler<FormState> = (data) => {
        const user = {
            name: "example name",
            email: data.email,
            password: data.password,
            token: "shwe_min_thar_123_token",
        }
        dispatch(login(user))

        reset({
            email: "",
            password: "",
        })

        return navigation.navigate("Home")
    }
    return (
        <Layout level="3" style={styles.container}>
            <Controller
                name={"email"}
                control={control}
                render={({ field: { onBlur, onChange } }) => {
                    return (
                        <Input
                            style={styles.input}
                            status={errors.email ? "danger" : "primary"}
                            accessoryLeft={<EmailIcon />}
                            autoCapitalize={"none"}
                            keyboardType={"email-address"}
                            returnKeyType={"next"}
                            returnKeyLabel={"Next"}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={"Email Address"}
                            ref={emailRef}
                            onSubmitEditing={() => passwordRef.current?.focus()}
                            caption={<ErrorMessage error={errors.email} />}
                            blurOnSubmit={false}
                        />
                    )
                }}
            />

            <Controller
                name={"password"}
                control={control}
                render={({ field: { onBlur, onChange } }) => {
                    return (
                        <Input
                            style={styles.input}
                            status={errors.password ? "danger" : "primary"}
                            accessoryRight={
                                <EyeIcon
                                    secureText={secureText}
                                    setSecureText={setSecureText}
                                />
                            }
                            accessoryLeft={<LockIcon />}
                            autoCapitalize={"none"}
                            returnKeyType={"done"}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            ref={passwordRef}
                            onSubmitEditing={handleSubmit(onSubmit)}
                            caption={<ErrorMessage error={errors.password} />}
                            blurOnSubmit={false}
                        />
                    )
                }}
            />

            <TouchableOpacity>
                <Text
                    category={"s1"}
                    appearance={"hint"}
                    style={styles.forgetText}
                >
                    Forget Password?
                </Text>
            </TouchableOpacity>

            <Button
                style={styles.submitBtn}
                status={"primary"}
                onPress={handleSubmit(onSubmit)}
            >
                Sign in
            </Button>
        </Layout>
    )
}

const themeStyle = StyleService.create({
    container: {
        flex: 1,
        marginTop: 30,
        paddingHorizontal: 20,
    },
    input: {
        marginVertical: 6,
    },
    submitBtn: {
        marginTop: 10,
        borderRadius: 10,
    },
    forgetText: { marginBottom: 8 },
})
