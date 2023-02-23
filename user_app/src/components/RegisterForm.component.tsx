import React, { useRef, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import {
    Button,
    Input,
    Layout,
    StyleService,
    useStyleSheet,
} from "@ui-kitten/components"
import {
    EmailIcon,
    EyeIcon,
    LockIcon,
    UserIcon,
} from "components/Icons.component"
import { yupResolver } from "@hookform/resolvers/yup"
import { ErrorMessage } from "./ErrorMessage.component"
import { RegisterSchema } from "utils/registerSchema"
import { RegisterAvatar } from "./RegisterAvatar.component"
import { login } from "actions/authUserSlice"
import { useNavigation } from "@react-navigation/native"
import { RegisterScreenProps } from "screens/register.screen"
import { useAppDispatch } from "hooks"

interface FormState {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export const RegisterForm = () => {
    const { navigation } = useNavigation<RegisterScreenProps>()

    const dispatch = useAppDispatch()

    const styles = useStyleSheet(themeStyle)

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormState>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(RegisterSchema),
    })

    const nameRef = useRef<Input>(null)
    const emailRef = useRef<Input>(null)
    const passwordRef = useRef<Input>(null)
    const confirmPasswordRef = useRef<Input>(null)

    const [secureText, setSecureText] = useState<boolean>(true)
    const [confirmSecureText, setConfirmSecureText] = useState<boolean>(true)

    const onSubmit: SubmitHandler<FormState> = (data) => {
        const user = {
            name: data.name,
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
            <RegisterAvatar />
            <Controller
                name={"name"}
                control={control}
                render={({ field: { onBlur, onChange } }) => {
                    return (
                        <Input
                            style={styles.input}
                            status={errors.name ? "danger" : "primary"}
                            accessoryLeft={<UserIcon />}
                            autoCapitalize={"none"}
                            returnKeyType={"next"}
                            returnKeyLabel={"Next"}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={"Name"}
                            ref={nameRef}
                            onSubmitEditing={emailRef.current?.focus}
                            caption={<ErrorMessage error={errors.name} />}
                            blurOnSubmit={false}
                        />
                    )
                }}
            />
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
                            onSubmitEditing={passwordRef.current?.focus}
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
                            returnKeyType={"next"}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={"Password"}
                            secureTextEntry={secureText}
                            ref={passwordRef}
                            onSubmitEditing={confirmPasswordRef.current?.focus}
                            caption={<ErrorMessage error={errors.password} />}
                            blurOnSubmit={false}
                        />
                    )
                }}
            />

            <Controller
                name={"confirmPassword"}
                control={control}
                render={({ field: { onBlur, onChange } }) => {
                    return (
                        <Input
                            style={styles.input}
                            status={
                                errors.confirmPassword ? "danger" : "primary"
                            }
                            accessoryRight={
                                <EyeIcon
                                    secureText={confirmSecureText}
                                    setSecureText={setConfirmSecureText}
                                />
                            }
                            accessoryLeft={<LockIcon />}
                            autoCapitalize={"none"}
                            returnKeyType={"done"}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={"Confirm Password"}
                            secureTextEntry={confirmSecureText}
                            ref={confirmPasswordRef}
                            onSubmitEditing={handleSubmit(onSubmit)}
                            caption={
                                <ErrorMessage error={errors.confirmPassword} />
                            }
                        />
                    )
                }}
            />

            <Button
                style={styles.submitBtn}
                status={"primary"}
                onPress={handleSubmit(onSubmit)}
            >
                Submit
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
    },
})
