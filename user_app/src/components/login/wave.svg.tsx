import * as React from "react"
import { Svg, Path } from "react-native-svg"

export const WaveSvg = () => {
    return (
        <Svg viewBox="0 0 1440 320">
            <Path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,32L60,64C120,96,240,160,360,154.7C480,149,600,75,720,48C840,21,960,43,1080,64C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
        </Svg>
    )
}
