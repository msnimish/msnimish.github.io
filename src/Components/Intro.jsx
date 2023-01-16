import React from "react";
import styled from "styled-components";
import heroImg from "../Assets/Images/hero.svg";
import { TypeAnimation } from "react-type-animation";

const IntroWrapper = styled.div`
  width:100vw;

  // outline: 2px solid red;

  .introContainer{
    width: 75vw;
    margin: auto;
    padding: 23vh 0px;
    // border: 1px solid green;
  }
  .introContent{
    display: flex;
    width: 100%;
    margin:auto;
    flex-direction: row;
    justify-content: flex-start;
    // border: 1px solid;
  }
  .descriptionBox{
    width: 45vw;
    height: 45vh;
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
    width: 60%;
    font-family: "Montserrat ExtraBold", "Times New Roman";
    font-size: 2rem;
    margin: 0px;
    color: #331551;
    z-index:10;
    // outline: 1px solid blue;    
  }

  .heroImageContainer{
    width: 50%,
    object-fit: fill;

    // visibility:hidden;
  }

  .heroImageContainer>img{
    width: 50%;
    // height: 20%;
    // display: none;
    position: absolute;
    top: 120px;
    left: 40%;
    z-index:5;
    // outline: 1px solid green;
    // visibility:hidden;
  }


  @media all and (min-width: 769px) and (max-width: 992px){
    .introContainer{
      width: 90vw;
    }
    .introContent{
      margin: 5vw auto;
    }
  }
  @media all and (min-width: 220px) and (max-width: 768px){
    font-size: 0.8em;
    
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
          </div>
          <div className="heroImageContainer" >
            <img src={heroImg} alt="heroImage" />
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
