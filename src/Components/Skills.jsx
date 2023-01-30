import { Flex, Heading, chakra, Text, Box, Progress, Image } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Skills = () => {
  const [data, setData] = useState([{
    name: "HTML",
    logo: "https://cdn.iconscout.com/icon/free/png-512/html-2752158-2284975.png?w=256&f=avif",
    value: "70"
  },
  {
    name: "CSS",
    logo: "https://cdn.iconscout.com/icon/free/png-512/css-alt-3628710-3029935.png?w=256&f=avif",
    value: "80"
  },
  {
    name: "JavaScript",
    logo: "https://cdn.iconscout.com/icon/free/png-512/javascript-3628858-3029998.png?w=256&f=avif",
    value: "50"
  },
  {
    name: "React",
    logo: "https://cdn.iconscout.com/icon/free/png-512/react-226053.png?w=256&f=avif",
    value: "80"
  },
  {
    name: "NodeJS",
    logo: "https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png?w=256&f=avif",
    value: "50"
  },{
    name: "MongoDB",
    logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png?w=256&f=avif",
    value: "50"
  },{
    name: "ExpressJS",
    logo: "https://cdn.iconscout.com/icon/free/png-512/express-9-1175170.png?w=256&f=avif",
    value: "50"
  },{
    name: "Mongoose",
    logo: "https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg",
    value: "50"
  },{
    name: "Chakra UI",
    logo: "https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg",
    value: "60"
  },{
    name: "Git",
    logo: "https://cdn.iconscout.com/icon/free/png-512/git-17-1175218.png?w=256&f=avif",
    value: "70"
  },{
    name: "Figma",
    logo: "https://cdn.iconscout.com/icon/free/png-512/figma-3521426-2944870.png?w=256&f=avif",
    value: "40"
  },{
    name: "Photoshop",
    logo: "https://cdn.iconscout.com/icon/free/png-512/photoshop-8-226474.png?w=256&f=avif",
    value: "60"
  },
])

  return (
    <Flex w="99vw" bg="primary.100" >
      <Flex w={{base:"90vw",md:"90vw",lg:"75vw"}} margin={{base:"40px auto",lg:"100px auto"}} flexDirection={"column"}>
        <Heading fontSize={{base:"2em",lg:"2.5em"}} mb="20px" textAlign={"center"}>Skills</Heading>
        <Flex  p={{base:"20px 20px 20px 0px",lg:"50px 50px 50px 0px"}} >
            <Flex flexDir={"row"} gap={{base:"20px",md:"25px",lg:"50px"}} flexWrap={"wrap"} justifyContent="center">
              {data && data.map((el)=>(
              <Box display={"flex"} flexDir="column" alignItems={"center"} gap={{base:"10px",md:'20px', lg:"30px"}} w={{base:"5em",md:"7em", lg:"10em"}} p={{base:"15px 12.5px 10px",lg:"30px 25px 20px"}} borderRadius={{base:"10px",lg:"20px"}} boxShadow = "md" bg="white">
                <Image src={`${el.logo}`} alt="skill" width={{base:"25px",md:"45px", lg:"60px"}} height={{base:"25px",md:"45px", lg:"60px"}} ></Image>
                {/* <Progress value={el.value} colorScheme="primary" size="sm" borderRadius={"5px"}/> */}
                <Heading fontSize={{base:"0.75em",lg:"1.2em"}} m="auto" mb ={{base:"auto",md:"10px",lg:"10px"}} color="gray.600" textAlign={"center"}>{el.name}</Heading>
              </Box>
              ))} 
            </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Skills;

