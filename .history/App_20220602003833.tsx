import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Onboarding from './src/screens/Onboarding';
import {store} from './src/store/store'


export default function App() {
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
