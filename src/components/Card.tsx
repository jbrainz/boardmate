import React from "react";
import { Box, Container, Text, VStack } from "native-base";

const Card = () => {
  return (
    <Container p="8" h="100%">
      <VStack justifyContent="center" flex={1} alignItems="center">
      
        <Text  fontFamily="ReadexProLight" color="error.100" fontSize="4xl">First component working with fonts</Text>
      </VStack>
    </Container>
  );
};

export default Card;
