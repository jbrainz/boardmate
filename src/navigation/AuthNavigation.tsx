import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import { AuthRoutes } from "../types/routes";

const AuthNavigation = (): JSX.Element => {
  const Stack = createNativeStackNavigator<AuthRoutes>();
  return (
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={SignIn}/>
      </Stack.Navigator>
  );
};

export default AuthNavigation;
