import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AboutBg from "../Assets/AboutBG.svg";
import ProfilePic from "../Assets/Images/AboutPhoto.png";

const About = () => {
  return (
    <Flex
      w={"99vw"}
      bgImage={AboutBg}
      objectFit="contain"
      bgRepeat={"no-repeat"}
      bgSize="cover"
      overflow={"hidden"}
      flexDir={"column"}
      p="50px auto"
    >
      <Heading
        color="white"
        fontWeight={"900"}
        fontSize={{ base: "1em",sm:"1.5em", md: "2em", lg:"3em" }}
        textShadow="2px 2px 5px #434343"
        m={{base:"1em auto 0px",md:"1.5em auto 0px",lg:"2.5em auto 0px"}}
      >
        About me
      </Heading>
      <Flex
        w={{ base: "90vw", md: "75vw" }}
        margin={{base:"auto",md:"10px auto 60px",lg:"50px auto 120px",}}
        textAlign={"justify"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "0px",sm:"20px", lg: "40px" }}
      >
        <Flex w={{ base: "55%", md: "30%" }} p={{ base: "10px 50px 10px",md:"0px" }} m="auto">
          {/* <Image src={ProfilePic} w={"100%"} transform={"rotate(-5deg)"} position="absolute"/> */}
          <Image
            src={ProfilePic}
            size={"200px"}
            transform={"rotate(0deg)"}
            objectFit="contain"
            aspectRatio="1"
          />
        </Flex>
        <Flex
          flexDirection={"column"}
          gap="50px"
          w={{ base: "100%", md: "60%" }}
          mb={{base: "50px",md:"0px"}}
        >
          <Text
            color="white"
            fontWeight={"400"}
            fontSize={{ base: "1em",sm:"1.2em", md: "1.2em", xl: "2em" }}
            textAlign={{ base: "left", md: "justify" }}
          >
            As a self-motivated aspiring web developer, I am constantly seeking
            out new challenges and opportunities to expand my skills and
            knowledge in the field. I am passionate about building{" "}
            <b>
              <i>robust design systems</i>
            </b>
            , developing{" "}
            <b>
              <i>user-friendly websites </i>
            </b>{" "}
            and am dedicated to staying up-to-date with the latest web
            development technologies and techniques. My key strength is my
            observation skills which I utilize to identify problems and resolve
            them in the best way possible.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
