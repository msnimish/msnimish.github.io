import { Box, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Container p={2} bg={"#331651"} color={"white"}  pos="fixed" w="100%" top={5}>
        <Flex w={"80%"} justifyContent={"space-between"}  m={"auto"}>
            <Box>
                {/* <Image src="./Images/msn-logo.png"></Image> */}
                <Text>MSN</Text>
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
