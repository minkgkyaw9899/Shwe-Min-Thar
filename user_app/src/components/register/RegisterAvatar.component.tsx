import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import React, { useEffect, useState } from "react"
import { Avatar, Button, Card, Modal, Text } from "@ui-kitten/components"
import { CameraIcon } from "components/miscellaneous"
import { openCamera, openGallery } from "utils"
import { useToast } from "react-native-toast-notifications"
import { useAppDispatch, useAppSelector } from "hooks"
import { login, selectAuthUser } from "actions"

export const RegisterAvatar = () => {
    const authUser = useAppSelector(selectAuthUser)

    const { avatarUrl } = authUser

    const toast = useToast()

    const dispatch = useAppDispatch()

    const [error, setError] = useState<string | undefined>(undefined)
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        if (error) {
            toast.show(error)
        }
    }, [error, toast])

    const handleModal = () => setShowModal(!showModal)

    const handleOpenCamera = async () => {
        try {
            const img = await openCamera()

            handleModal()

            return dispatch(login({ avatarUrl: img }))
        } catch (err: any) {
            return setError(err)
        }
    }

    const handleOpenGallery = async () => {
        try {
            const img = await openGallery()

            handleModal()

            return dispatch(login({ avatarUrl: img }))
        } catch (err: any) {
            return setError(err)
        }
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={handleModal}>
                <View style={styles.root}>
                    <Avatar
                        style={styles.avatarSvg}
                        size="giant"
                        source={
                            !avatarUrl
                                ? require("../../assets/img/avatar.png")
                                : { uri: avatarUrl }
                        }
                    />

                    {!avatarUrl && (
                        <CameraIcon style={styles.cameraIcon} fill="#797979" />
                    )}
                </View>
            </TouchableWithoutFeedback>
            <Modal
                visible={showModal}
                onBackdropPress={handleModal}
                backdropStyle={styles.backdrop}
            >
                <Card appearance={"filled"}>
                    <Text style={styles.modalHeader} category={"h5"}>
                        Choose Image for Avatar from
                    </Text>
                    <Button onPress={handleOpenCamera} style={styles.modalBtn}>
                        Camera
                    </Button>
                    <Button onPress={handleOpenGallery} style={styles.modalBtn}>
                        Gallery
                    </Button>
                </Card>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        position: "relative",
        overflow: "hidden",
        alignItems: "flex-start",
        display: "flex",
        width: 70,
        justifyContent: "center",
        alignContent: "center",
    },
    avatarSvg: { marginBottom: 12 },
    cameraIcon: {
        height: 32,
        width: 32,
        position: "absolute",
        top: -50,
        left: 24,
        color: "white",
    },
    modalHeader: {
        marginVertical: 8,
        textAlign: "center",
    },
    modalBtn: {
        marginVertical: 8,
        marginHorizontal: 2,
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
})
