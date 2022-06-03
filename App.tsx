import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Onboarding from './src/screens/Onboarding';
import {store} from './src/store/store'
import { useFonts } from 'expo-font';
import { theme as customThemes } from './src/styles/globalStyles';

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
  
    
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customThemes}>
      <Onboarding />
      </NativeBaseProvider>
    </Provider>
  )
}

else{
  return null
}

}



