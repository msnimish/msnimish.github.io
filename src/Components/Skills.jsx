import { Flex, Heading, chakra, Text } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
    <Flex w="100vw" m="10vh 0px">
      <Flex w="75vw" margin="auto" flexDirection={"column"}>
        <Heading>Skills</Heading>
        <Flex>
          <chakra.marquee w="100vw" h="15vh" position="absolute" left="0px" bg="red" m="30px 0px">
              <Text>Hello</Text>
          </chakra.marquee>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Skills;

