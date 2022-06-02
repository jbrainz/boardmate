import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Onboarding from './src/screens/Onboarding';
import {store} from './src/store/store'
import { useFonts } from 'expo-font';


export default function App() {
  const [fontLoaded]=useFonts({
    // Mulish font
    'Mulish-Light':require("./assets/fonts/Mulish-Light.ttf"),
    'Mulish-Regular':require("./assets/fonts/Mulish-Regular.ttf"),
    'Mulish-Bold':require("./assets/fonts/Mulish-Bold.ttf"),
// Readex font
    'ReadexPro-Light':require("./assets/fonts/ReadexPro-Light.ttf"),
    'ReadexPro-Regular':require("./assets/fonts/ReadexPro-Regular.ttf"),
    'ReadexPro-Bold':require("./assets/fonts/ReadexPro-SemiBold.ttf")
  })
  


if(fontLoaded){
  const theme= extendTheme({
    colors:{
      primary:{
        50:"#252235",
      },
      secondary:{
        50:"#2B2847"
      },
      deep_bg:{
        50:"#967BFE"
      },
      accent_alt:{
        50:"#00498A"
      },
      error:{
        50:"#6A59FF",
        100:"#F86778"
      },
      icon_colors:{
        50:"#D8D8D8"
      },
      white_text:{
        50:"#FBFBFB"
      },
      warning:{
        50:"#FFB648"
      },
      accent_bg:{
        50:"#794DE3"
      },
      black:{
        50:"#383E6E"
      },
      success:{
        50:"#16D951"
      }
    },
    fontConfig:{
      ReadexPro:{
        300:{
          light:"ReadexPro-Light"
        },
        400:{
          normal:"ReadexPro-Regular"
        },
        600:{
         bold:"ReadexPro-Bold" 
        }
      },
  
      Mulish:{
        300:{
          light:"Mulish-Light"
        },
        400:{
          normal:"Mulish-Regular"
        },
        700:{
         bold:"Mulish-Bold" 
        }
      }
    },
    fonts: {
              Roboto: 'Mulish'
          }
  })
    
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
      <Onboarding />
      </NativeBaseProvider>
    </Provider>
  )
}

else{
  return null
}

}

// TODO: setup fonts

// TODO: Set up Colors

// TODO: set up splash screen

// [x] fonts done
