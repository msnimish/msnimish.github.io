import React from "react";
import styled from "styled-components";
import heroImg from "../Assets/Images/hero.svg";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { downloadFile } from "./Navbar.jsx";

const IntroWrapper = styled.div`
  width:98.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;

  // outline: 2px solid red;

  .introContainer{
    width: 75vw;
    margin: auto;
    margin: 5vh auto 22vh;
    // border: 1px solid green;
  }

  .introContent{
    display: flex;
    width: 100%;
    margin:auto;
    flex-direction: row;
    // justify-content: flex-start;
    // border: 1px solid;
  }
  .descriptionBox{
    width: 40%;
    margin: 10% 0px 5%;
    // height: 45vh;
  }
  .greetings{
    font-size: 2em;
    font-family: "Montserrat ExtraBold", "Times New Roman";
    margin:0px;
    color: #331551
  }
  .name{
    font-family: "Montserrat ExtraBold", "Times New Roman";
    font-size: 2.5em;
    background-size: 100%,
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    background-image: -webkit-linear-gradient(120deg, #F89337,#BF3130);
  }
  .role{
    width: 100%;
    height: 110px;
    font-family: "Montserrat ExtraBold", "Times New Roman";
    font-size: 2rem;
    margin: 0px;
    color: #331551;
    z-index:10;
    // outline: 1px solid blue;    
  }

  .heroImageContainer{
    width: 58%;
    height: 100%;
   

    // visibility:hidden;
  }

  .heroImageContainer>img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 50px;
    // display: none;
    // position: absolute;
    // top: 7.5em;
    // left: 40%;
    // z-index:5;
    // outline: 1px solid red;
    // visibility:hidden;
  }

  @media all and (min-width: 1025px){
    .greetings{
      font-size: 2.5em
    }
    .name{
      font-size: 3em
    }
    .role{
      font-size: 2.5em
    }
  }

  @media all and (min-width: 769px) and (max-width: 1024px){
    .introContainer{
      width: 90vw;
    }
    .introContent{
      margin: auto;
    }
    .greetings{
      font-size: 1.7em
    }
    .name{
      font-size: 2em
    }
    .role{
      font-size: 1.7em
    }
  }
  @media all and (min-width: 480px) and (max-width: 768px){
    .introContainer{
      width: 90vw;
      margin: 6vh auto 20vh;
    }
    .introContent{
      margin: 5vw auto;
    }
    .greetings{
      font-size: 1.4em
    }
    .name{
      font-size: 1.8em
    }
    .role{
      font-size: 1.4em
    }
    
  }
  @media all and (min-width: 220px) and (max-width: 479px){
    .introContainer{
      margin: 16vh auto 34vh;
    }
    .descriptionBox{
      width: 100%;
      text-align:center;
    }
    .role{
      height: 170px;
    }
    .heroImageContainer{
      display:none;
    }
    .heroImageContainer>img{
      display:none;
    }
  }
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <div className="introContainer">
        <div className="introContent">
          <div className="descriptionBox">
            <h1 className="greetings">Hi 👋 My name is </h1>
            <span className="name">M.S. Nimish</span>
            <div className="role">
              <TypeAnimation
                sequence={[
                  "I am a Full Stack Web Developer",
                  1000,
                  "Proficient in MERN Stack",
                  1000,
                ]}
                wrapper="h1"
                deletionSpeed={90}
                repeat={Infinity}
              />
            </div>
            <Button
              size={{ base: "lg", md: "md" }}
              rightIcon={<DownloadIcon />}
              onClick={downloadFile}
              variant="ghost"
              _hover={{
                backgroundColor: "white",
                color: "secondary.500",
              }}
              fontSize={{ base: "2em", md: "1.2em",lg:"1.4em", xl: "1.4em" }}
              bg={"secondary.500"}
              color="white"
              mt={{base:"0px", sm:"200px", md:"0px",lg:"0px",xl:"20px"}}
              // mt="20px"
            >
              Resume
            </Button>
          </div>
          <div className="heroImageContainer">
            <img src={heroImg} alt="heroImage" />
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
