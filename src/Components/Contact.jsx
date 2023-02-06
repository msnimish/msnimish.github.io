import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import gitAnimationData from "../Assets/github.json"
import linkedinAnimationData from "../Assets/linkedinAnimation.json"

import React from "react";
import contactBG from "../Assets/Images/contactBg.svg";
import githubLogo from "../Assets/Images/github.svg";
import linkedinLogo from "../Assets/Images/linkedin.svg";

const Contact = () => {

  return (
    <Flex
      w={"99vw"}
      bgImage={contactBG}
      objectFit="cover"
      bgRepeat={"no-repeat"}
      bgSize="cover"
      overflow={"hidden"}
      flexDir={"row"}
      // p="50px auto"
      // h="90vh"
      // zIndex={"10"}
      p="50px"
      justifyContent={"flex-end"}
    >
      {/* <Image src={contactBG} position="absolute" w="100vw" h="100vh"/> */}
      <Flex w="50%" flexDir="column" gap={"50px"} justifyContent="center" m="100px 0px 100px 0px" alignItems={"center"}>
        <Heading color={"white"}>Contact me</Heading>
        <Flex alignItems={"center"} gap="20px">
          <Image
            src={
              "https://cdn.iconscout.com/icon/free/png-512/gmail-30-722694.png?w=256&f=avif"
            }
            w="50px"
          />
          <Text
            fontWeight={"600"}
            color="white"
            fontSize={"1.4em"}
            letterSpacing={"2px"}
          >
            msnimish24@gmail.com
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap="20px">
          <Image
            src={
              "https://cdn.iconscout.com/icon/free/png-512/whatsapp-136-498413.png?w=256&f=avif"
            }
            w="50px"
          />
          <Text
            fontWeight={"600"}
            color="white"
            fontSize={"1.4em"}
            letterSpacing={"2px"}
          >
            +91 8879453525
          </Text>
        </Flex>
        <Heading fontSize="1.6em" color="white">Other Platforms</Heading>
        <Flex mt="-20px">
          <Link href="https://github.com/msnimish" isExternal>
            {/* <Image src={githubLogo} w="50px" _hover={{transform:"scale(105%)"}}></Image> */}
            <Lottie animationData={gitAnimationData} style={{width:"100px", height:"100px"}} loop={true} />
          </Link>
          <Link href="https://www.linkedin.com/in/msnimish/" isExternal>
            {/* <Image  src={linkedinLogo} w="50px" _hover={{transform:"scale(105%)"}}></Image> */}
            <Lottie animationData={linkedinAnimationData} style={{width:"65px", height:"65px", backgroundColor:"white", borderRadius:"20px", padding:"15px",margin:"15px"}} loop={true} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
