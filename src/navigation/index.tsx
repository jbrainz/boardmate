import * as React from 'react'
import LoadAssets from './LoadAssets'
import Routes from './Routes'

const NavigationWrapper = (): JSX.Element => {
    const fonts = {
        // Mulish font
        "Mulish-Light": require("../../assets/fonts/Mulish-Light.ttf"),
        "Mulish-Regular": require("../../assets/fonts/Mulish-Regular.ttf"),
        "Mulish-Bold": require("../../assets/fonts/Mulish-Bold.ttf"),
        // Readex font
        "ReadexPro-Light": require("../../assets/fonts/ReadexPro-Light.ttf"),
        "ReadexPro-Regular": require("../../assets/fonts/ReadexPro-Regular.ttf"),
        "ReadexPro-Bold": require("../../assets/fonts/ReadexPro-SemiBold.ttf"),
      }

    return (
        <LoadAssets {...{fonts}}>
            <Routes />
        </LoadAssets>
    )
}
export default NavigationWrapper