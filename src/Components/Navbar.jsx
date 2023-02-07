import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home/Home";
import Projects from "./Projects";
import Logo from "../Assets/MSN.svg";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  Flex,
  Box,
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import { saveAs } from "file-saver";

const Nav = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: #331551;
  // outline: 2px solid green;

  .navContainer {
    background-color: #331551;
    height: 60px;
    width: 100%;
  }
  .navWrapper {
    width: 75vw;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 100%;
    background-color: #331551;
  }
  .navOptions {
    width=100%
    display: flex;
    flex-direction:row;
    gap: 50px;
    flex-wrap:nowrap;
    // margin-left:7.5em;
    
  }
  .navLogo {
    margin-top:5px;
    width:6em;
  }

  @media all and (min-width: 768px) and (max-width: 1024px){
    .navWrapper{
      width:90vw;
    }
    .navOptions{
      font-size: smaller;
    }
    .navLogo{
      width: 6em;
    }
  }

  @media all and (min-width: 220px) and (max-width: 767px){
    font-size: 0.8em;
    .navWrapper{
      width:90vw;
    }
    .navLogo{
      width: 6em;
    }
    .navOptions{
      display: none;
    }
  }
`;

export const downloadFile = () => {
  saveAs(
    "https://drive.google.com/file/d/1dDJVvX6T34nDahS8Crom5zksrP-PNo99/view?usp=sharing"
  );
};

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navBtn = {};


  return (
    <Nav>
      <div className="navContainer">
        <div className="navWrapper">
          <Button display={{base:"block", md:"none", xl:"none" }}ref={btnRef} padding={"0px"} colorScheme={"primary"} onClick={onOpen} width={{base:"40px", md:"80px"}} height={"100%"}>
            <HamburgerIcon bg="transparent" width="30px" height="45px" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
            height={"100vh"}
          >
            <DrawerOverlay />
            <DrawerContent bg="primary.500"
            color="white" overflow="hidden" height={"100vh"}>
              <DrawerCloseButton />
              <DrawerHeader>
              <img
                src={Logo}
                className="navLogo"
                alt="Logo"
                style={{ width: "100px" }}
              />
              </DrawerHeader>

              <DrawerBody>
                <Flex flexDir={"column"} h="70%" gap="20px" fontWeight={"600"} >
                  <Box>Home</Box>
                  <Box>About</Box>
                  <Box>Skills</Box>
                  <Box>Projects</Box>
                  <Box>Contact</Box>
                </Flex>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  rightIcon={<DownloadIcon />}
                  onClick={downloadFile}
                  style={navBtn}
                  variant="ghost"
                  _hover={{
                    backgroundColor: "white",
                    color: "secondary.500",
                  }}
                  fontSize={{base:"1.2em", md:"1.2em"}}
                  bg={"secondary.500"}
                  color="white"
                >
                  Resume
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <img
            src={Logo}
            className="navLogo"
            alt="Logo"
            style={{ cursor:"pointer" }}
          />
          <div className="navOptions">
            <Button
              _hover={{
                backgroundColor: "transparent",
                color: "primary.300",
              }}
              style={navBtn}
              variant="ghost"
              fontSize={{base:"1em",lg:"1.2em"}}
            >
              Home
            </Button>
            <Button
              _hover={{
                backgroundColor: "transparent",
                color: "primary.300",
              }}
              style={navBtn}
              variant="ghost"
              fontSize={{base:"1em",lg:"1.2em"}}
            >
              About
            </Button>
            <Button
              _hover={{
                backgroundColor: "transparent",
                color: "primary.300",
              }}
              style={navBtn}
              variant="ghost"
              fontSize={{base:"1em",lg:"1.2em"}}
            >
              Skills
            </Button>
            <Button
              _hover={{
                backgroundColor: "transparent",
                color: "primary.300",
              }}
              style={navBtn}
              variant="ghost"
              fontSize={{base:"1em",lg:"1.2em"}}
            >
              Projects
            </Button>
            <Button
              _hover={{
                backgroundColor: "transparent",
                color: "primary.300",
              }}
              style={navBtn}
              variant="ghost"
              fontSize={{base:"1em",lg:"1.2em"}}
            >
              Contact
            </Button>
            {/* <Link
              src="https://drive.google.com/file/d/1dDJVvX6T34nDahS8Crom5zksrP-PNo99/view?usp=sharing"
              download
            > */}
            
            {/* </Link> */}
          </div>
          <Button size={{base:"sm", md:"md"}}
            rightIcon={<DownloadIcon />}
            onClick={downloadFile}
            variant="ghost"
            _hover={{
              backgroundColor: "white",
              color: "secondary.500",
            }}
            fontSize={{base:"1em", xl:"1.2em"}}
            bg={"secondary.500"}
            color="white"
          >
            Resume
          </Button>
        </div>
      </div>
    </Nav>
  );
};
