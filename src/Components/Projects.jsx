import { Box, Button, Container, Flex, Heading, HStack, Image, Tag, Text, VStack,Link  } from '@chakra-ui/react';
import { Carousel, LeftButton, Provider, RightButton } from 'chakra-ui-carousel';
import React, { forwardRef } from 'react'
import { capsFirst } from '../utils';
import ChakraCarousel from './ChakraCarousel';
import credBee from "../Assets/credbee.png";
import urbanCompany from "../Assets/urbanCompany.png";
import styleNova from "../Assets/styleNova.png";
import nextIn from "../Assets/nextIn.png";
import Lottie from "lottie-react";
import gitAnimationData from "../Assets/github.json"


let react = "https://cdn.iconscout.com/icon/free/png-512/react-226053.png?w=256&f=avif";
let node = "https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png?w=256&f=avif";
let mongodb = "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png?w=256&f=avif";
let express = "https://cdn.iconscout.com/icon/free/png-512/express-9-1175170.png?w=256&f=avif";
let mongooose = "https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg";
let chakra = "https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg"
let html = "https://cdn.iconscout.com/icon/free/png-512/html-2752158-2284975.png?w=256&f=avif"
let css = "https://cdn.iconscout.com/icon/free/png-512/css-alt-3628710-3029935.png?w=256&f=avif"
let next = "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg";
let socket = "https://cdn.worldvectorlogo.com/logos/socket-io.svg"

let JS = "https://cdn.iconscout.com/icon/free/png-512/javascript-3628858-3029998.png?w=256&f=avif"

const styles={
  width:"200px",
  height:"200px",
}

const projects = [
  {
    title:"StyleNova",
    description:"Style Nova is an ecommerce website, that brings together multiple concepts under one roof – Apparel, Footwear, Children’s Wear, Beauty & Accessories offering a convenient one stop shop",
    liveLink:"https://stylenova.netlify.app/",
    github:"https://github.com/msnimish/active-art-8329",
    image:styleNova,
    techStacks:["React","NodeJS","MongoDB", "ExpressJS","ChakraUI"],
    techStackLogos:[react,node, mongodb, express, chakra]
  },
  {
    title:"Next-In",
    description:"Next-In is a productivity tool option. Manage your team's project from anywhere and collaborate with them in real time.",
    liveLink:"https://next-in-silk.vercel.app/",
    github:"https://github.com/msnimish/next-in-productivity-chatApp",
    image:nextIn,
    techStacks:["NextJS","NodeJS","MongoDB", "ExpressJS","Socket.io","ChakraUI"],
    techStackLogos:[next,node, mongodb, express,socket, chakra]
  },
  {
    title:"CredBee",
    description:"Credbee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",
    liveLink:"https://tangerine-truffle-43e0b4.netlify.app/",
    github:"https://github.com/kriti4666/credbee.com",
    image:credBee,
    techStacks:["React","NodeJS","MongoDB", "ExpressJS","ChakraUI"],
    techStackLogos:[react,node, mongodb, express, chakra]
  },
  {
    title:"Urban Company",
    description:"Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services",
    liveLink:"https://jolly-donut-35e1f0.netlify.app/",
    github:"https://github.com/hustler-abhi/Urbancompany-Clone",
    image:urbanCompany,
    techStacks:["HTML","CSS","JavaScript"],
    techStackLogos:[html,css, JS]
  }
]

const Projects = forwardRef(({scroll},ref) => {
  return (
    <Container
        py={8}
        px={0}
        m="auto"
        maxW="75vw"
        mb="100px"
        ref={ref}
      >
        <Heading mt={{base:"5px",md:"50px"}} fontSize={{base:"2em", md:"3em"}} textAlign="center">{`Projects`}</Heading>
        <Text mb={{base:"5px",md:"50px"}} textAlign={"center"}>{`(${projects.length} projects)`}</Text>
        <ChakraCarousel gap={5}>
          {projects?.map((project, i) => (
            <Flex
              key={i}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              justifyContent="space-between"
              // gap="20px"
              textAlign={"center"}
              // border="10px solid"
              maxW={{base:"", md:"36vw"}}
              flexDirection="column"
              overflow="hidden"
              color="primary.400"
              bg="base.d100"
              rounded={5}
              flex={1}
              // p={5}
            >
              <Flex maxH="45%" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"><Image src={project.image} w="100%"></Image></Flex>
              <Heading size="md" pt="20px">{`${i+1}. ${project.title}`}</Heading>
              <Text px={{base:"15px", md:"50px"}}>{project.description}</Text>
              <Text fontWeight={"600"}>Tech Stacks: </Text>
              <Flex flexWrap="wrap" gap="15px" justifyContent="center">
              {project.techStacks.map((tech,j)=>(
                <VStack w="80px" justifyContent={"space-between"} key={j} boxShadow="rgba(0, 0, 0, 0.16) 2px 3px 4px, rgba(0, 0, 0, 0.23) 2px 3px 4px" p={"10px"} borderRadius="10px">
                  <Image src={project.techStackLogos[j]} w="35px"/>
                  <Text fontSize="12px">{tech}</Text>
                </VStack>
              ))}
              </Flex>
              <Flex justifyContent={"space-around"} my="30px" flexDirection={{base:"column", md:"row"}}>
                <Button bgImage={"linear-gradient(60deg, #F89337,#BF3130)"} _hover={{transform:"scale(1.1)"}} color="white" m="10px">
                  <Link href={project.liveLink}  _hover={{textDecoration:"none"}}>Live Link</Link>
                </Button>
                {/* <Button bgImage={"linear-gradient(120deg, #F89337,#BF3130)"} _hover={{transform:"scale(1.1)"}} color="black" > */}
                  <Link href={project.github} display="flex" justifyContent={"center"} alignItems="center"_hover={{textDecoration:"none", transform:"scale(1.1)"}} flexDir="row">
                    <Lottie animationData={gitAnimationData} style={{width:"60px", height:"60px"}} loop={true}/>
                    <Text fontWeight={"600"}>Code Base</Text>
                  </Link>
                {/* </Button> */}
              </Flex>
            </Flex>
          ))}
        </ChakraCarousel>
      </Container>
  )
})

export default Projects