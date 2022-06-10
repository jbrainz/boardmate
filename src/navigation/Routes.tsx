import React from 'react'
import AuthNavigation from './AuthNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from '../types/routes';

const Routes = (): JSX.Element => {
    
    const Stack = createNativeStackNavigator<Main>();
    return (
      <Stack.Navigator
       >
        <Stack.Screen
          options={{ headerShown: false }}
          name="AuthNavigation"
          component={AuthNavigation}
        />
      </Stack.Navigator>
    );
  };
  export default Routes;
  