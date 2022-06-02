import React from 'react'
import { Box, Container, Text, VStack } from "native-base";

const Card = () => {
  return (
    <Container p="8" h="100%">
      <VStack justifyContent="center" flex={1} alignItems="center">
        <Text textAlign="center" bold fontSize="3xl">
          The first ever component wfdwd wfdwd
        </Text>
      </VStack>
    </Container>
  );
};

export default Card;
