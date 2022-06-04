import React from "react";
import { Button, Container, Text } from "native-base";
import { AuthNavigationProps } from "../../types/routes";

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">): JSX.Element => {
  return (
    <Container py="8" px="10">
      <Text fontSize="3xl" fontFamily="MulishBold">
        Sign up component
      </Text>
      <Button onPress={() => navigation.navigate("Login")}>Sign in</Button>
    </Container>
  );
};

export default SignUp;
