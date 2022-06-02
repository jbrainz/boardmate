import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Onboarding from './src/screens/Onboarding';
import {store} from './src/store/store'
import { useFonts } from 'expo-font';


export default function App() {
  // const [fontLoaded]=useFonts({
  //   // 
  //   'Mulish-Light':require("./assets/fonts/Mulish-Light"),
  //   'Mulish-Regular':require("./assets/fonts/Mulish-Regular"),
  //   'Mulish-Bold':require("./assets/fonts/Mulish-Bold"),

  //   'Readex-Light':require("./assets/fonts/ReadexPro-Light"),
  //   'Readex-Regular':require("./assets/fonts/ReadexPro-Regular"),
  //   'Readex-Bold':require("./assets/fonts/Readex-Bold")
  // })

  // console.log(fontLoaded)
  return (
    <Provider store={store}>
      <NativeBaseProvider>
      <Onboarding />
      </NativeBaseProvider>
    </Provider>
  );
}

// TODO: setup fonts

// TODO: Set up Colors

// TODO: set up splash screen
