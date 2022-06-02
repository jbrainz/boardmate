import { extendTheme } from 'native-base';

export const theme = extendTheme({
    colors: {
        primary: {
            50: "#252235",
        },
        secondary: {
            50: "#2B2847"
        },
        deep_bg: {
            50: "#967BFE"
        },
        accent_alt: {
            50: "#00498A"
        },
        error: {
            50: "#6A59FF",
            100: "#F86778"
        },
        icon_colors: {
            50: "#D8D8D8"
        },
        white_text: {
            50: "#FBFBFB"
        },
        warning: {
            50: "#FFB648"
        },
        accent_bg: {
            50: "#794DE3"
        },
        black: {
            50: "#383E6E"
        },
        success: {
            50: "#16D951"
        }
    },
    fontConfig: {
        ReadexPro: {
            300: {
                light: "ReadexPro-Light"
            },
            400: {
                normal: "ReadexPro-Regular"
            },
            600: {
                bold: "ReadexPro-Bold"
            }
        },

        Mulish: {
            300: {
                light: "Mulish-Light"
            },
            400: {
                normal: "Mulish-Regular"
            },
            700: {
                bold: "Mulish-Bold"
            }
        },

    },

    fonts: {
        Mulish: "Mulish"
    }
})