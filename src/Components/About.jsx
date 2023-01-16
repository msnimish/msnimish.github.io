import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AboutBg from "../Assets/AboutBG.svg";
import ProfilePic from "../Assets/Images/AboutPhoto.png";


const About = () => {
  
  return (
    <Flex w={"99vw"} bgImage={ AboutBg } objectFit="contain" bgRepeat={"no-repeat"} bgSize="cover" overflow={"hidden"} position="relative">
        <Flex w={"99vw"} h={"90vh"} margin="0px" textAlign={"justify"} justifyContent="space-between" flexDirection="row" outline="1px solid green">
            <Image src={ProfilePic} w={"18%"} position="absolute" transform={"rotate(-5deg)"} bottom="14.5em" left="15em"/>
            <Image src={ProfilePic} w={"18%"} position="absolute" transform={"rotate(2deg)"} bottom="12.5em" left="17em"/>
            <Flex flexDirection={"column"} mr="200px" mt="12.5em" gap="50px">
              <Heading color="white" fontWeight={"900"} fontSize="2em" textShadow= "2px 2px 5px #434343" ml="40vw">About me</Heading>
              <Text color="white" fontWeight={"400"} fontSize="1.5em" textAlign={"justify"} ml="40vw">As a self-motivated aspiring web developer, I am constantly seeking out new challenges and opportunities to expand my skills and knowledge in the field. I am passionate about building <b><i>robust design systems</i></b>, developing <b><i>user-friendly websites </i></b> and am dedicated to staying up-to-date with the latest web development technologies and techniques. My key strength is my observation skills which I utilize to identify problems and resolve them in the best way possible.</Text>
            </Flex>
        </Flex>
    </Flex>
  )
};

export default About