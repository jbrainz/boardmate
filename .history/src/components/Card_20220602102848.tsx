import React from 'react'
import { Box, Container, Text, VStack } from "native-base";

const Card = () => {
  return (
    <Container p="8" h="100%">
      <VStack justifyContent="center" flex={1} alignItems="center">
        <Text textAlign="center" color="error.100" fontFamily="monospace.100" fontWeight={300} fontSize="3xl">
          The first ever component and working fine
        </Text>
      </VStack>
    </Container>
  );
};

export default Card;
