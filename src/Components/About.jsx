import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AboutBg from "../Assets/AboutBG.svg";
import ProfilePic from "../Assets/ProfilePic.svg";


const About = () => {
  
  return (
    <Flex w={"99vw"} bgImage={ AboutBg } objectFit="contain" bgRepeat={"no-repeat"} bgSize="cover" overflow={"hidden"} position="relative">
        <Flex w={"99vw"} h={"90vh"} margin="0px" textAlign={"justify"} justifyContent="space-between" flexDirection="row" outline="1px solid green">
            <Image src={ProfilePic} w={"35%"} position="absolute" bottom="-1px" transform="rotateY(180deg)" zIndex="0" textShadow="2px 2px 5px #434343"/>
            <Flex flexDirection={"column"} mr="200px" mt="120px" gap="50px">
              <Heading color="white" fontWeight={"900"} fontSize="48px" textShadow= "2px 2px 5px #434343" ml="40vw">About me</Heading>
              <Text color="white" fontWeight={"400"} fontSize="32px" textAlign={"justify"} ml="40vw">As a self-motivated aspiring web developer, I am constantly seeking out new challenges and opportunities to expand my skills and knowledge in the field. I am passionate about building <b><i>robust design systems</i></b>, developing <b><i>user-friendly websites </i></b> and am dedicated to staying up-to-date with the latest web development technologies and techniques</Text>
            </Flex>

        </Flex>
    </Flex>
  )
};

export default About