import { launchCamera } from "react-native-image-picker"
import { PermissionsAndroid } from "react-native"

export const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera({
            mediaType: "photo",
            includeBase64: true,
        })

        if (result.errorMessage) {
            throw new Error(result.errorMessage)
        } else if (result.assets) {
            return result.assets[0]?.uri
        }
    } else {
        throw new Error("Camera permission denied")
    }
}
