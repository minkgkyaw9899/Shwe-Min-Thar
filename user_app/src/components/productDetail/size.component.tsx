import React, { FC, useEffect } from "react"
import { StyleSheet } from "react-native"
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components"

interface Props {
    setChosenSize: (size: string | number) => void
    isShoe: boolean
}
const readyData = ["S", "M", "L", "XL"]
const shoeSizeData = [44, 42, 41, 40, 38, 36, 35, 31, 28]

export const SizeSelector: FC<Props> = ({ setChosenSize, isShoe }: Props) => {
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0))
    const [displayValue, setDisplayValue] = React.useState<string | number>(
        "Choose Size"
    )

    useEffect(() => {
        setDisplayValue(() =>
            isShoe
                ? shoeSizeData[selectedIndex.row]
                : readyData[selectedIndex.row]
        )
    }, [isShoe, selectedIndex.row])

    return (
        <Layout style={styles.container} level="1">
            <Select
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={(index) => {
                    // @ts-ignore
                    setSelectedIndex(index)
                    return setChosenSize(displayValue)
                }}
            >
                {isShoe
                    ? shoeSizeData.map((size) => (
                          <SelectItem key={size} title={size} />
                      ))
                    : readyData.map((size) => (
                          <SelectItem key={size} title={size} />
                      ))}
            </Select>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        // minHeight: 128,
        width: 100,
    },
})
