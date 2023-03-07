import React, { useEffect, useRef } from "react"
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
import { useAppDispatch, useAppSelector } from "hooks"
import {
    EmailIcon,
    EyeIcon,
    LockIcon,
} from "components/miscellaneous/Icons.component"
import { LoginSchema } from "utils"
import { ErrorMessage } from "components/miscellaneous"
import { selectAuthUser, login } from "actions/authUserSlice"
import { LoginScreenProps } from "types/navigation/types"

interface FormState {
    email: string
    password: string
}

export const LoginForm = () => {
    const styles = useStyleSheet(themeStyle)

    const navigation = useNavigation<LoginScreenProps>()

    const authUser = useAppSelector(selectAuthUser)

    useEffect(() => {
        if (!authUser.token) {
            // @ts-ignore
            return navigation.addListener("beforeRemove", (e) => {
                e.preventDefault()
                // @ts-ignore
                navigation.push("Main")
            })
        }
    }, [authUser.token, navigation])

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

    const [secureText, setSecureText] = React.useState<boolean>(true)

    const onSubmit: SubmitHandler<FormState> = (data) => {
        reset({
            email: "",
            password: "",
        })

        const user = {
            name: "example name",
            email: data.email,
            password: data.password,
            token: "shwe_min_thar_123_token",
        }

        dispatch(login(user))

        // @ts-ignore
        return navigation.goBack()
    }
    return (
        <Layout level="3" style={styles.container}>
            <Controller
                name={"email"}
                control={control}
                render={({ field: { onBlur, onChange, value } }) => {
                    return (
                        <Input
                            value={value}
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
                render={({ field: { onBlur, onChange, value } }) => {
                    return (
                        <Input
                            value={value}
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
                            secureTextEntry={secureText}
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
