import { launchImageLibrary } from "react-native-image-picker"

export const openGallery = async () => {
    const result = await launchImageLibrary({
        mediaType: "photo",
        includeBase64: true,
    })

    if (result.errorMessage) {
        throw new Error(result.errorMessage)
    } else if (result.assets) {
        return result.assets[0]?.uri
    }
}
