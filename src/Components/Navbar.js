import { Box, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Container p={2} bg={"#331651"} maxW={"100%"} color={"white"} >
        <Flex w={"80%"} justifyContent={"space-between"} bg={"#331651"} m={"auto"}>
            <Box>
                <Image src="./Images/msn-logo.png"></Image>
            </Box>
            <HStack gap={"20px"}>
                <Text color={"white"}>Home</Text>
                <Text color={"white"}>About</Text>
                <Text color={"white"}>Skills</Text>
                <Text color={"white"}>Contact</Text>
                <Text color={"white"}>Resume</Text>
            </HStack>
        </Flex>
    </Container>
  )
}
