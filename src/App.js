import About from "./Components/About";
import Chatbot from "./Components/Chatbot";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Intro from "./Components/Intro";
import Stats from "./Components/Stats";
import styled from "styled-components";
import { useRef } from "react";



const PageContainer = styled.div`
  width: 98.5vw;
  font-family: Montserrat;
`;

function App() {
  const contact = useRef(null);
  const intro = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);

  const scrollToView = (e) => {
    if(e.target.innerText==="Home"){
      intro.current.scrollIntoView({behaviour: "smooth"});
    }
    if(e.target.innerText==="About"){
      about.current.scrollIntoView({behaviour: "smooth"});
    }
    if(e.target.innerText==="Projects"){
      projects.current.scrollIntoView({behaviour: "smooth"});
    }
    if(e.target.innerText==="Skills"){
      skills.current.scrollIntoView({behaviour: "smooth"});
    }
    if(e.target.innerText==="Contact"){
      contact.current.scrollIntoView({behaviour: "smooth"});
    }
  }
  return (
    <PageContainer id="containerElement">
      {/* <Home></Home> */}
      <Navbar style={{ position: "sticky", top: "0" }} scroll={scrollToView}></Navbar>
      <Intro ref={intro}></Intro>
      <About ref={about}></About>
      <Projects ref={projects}></Projects>
      <Skills ref={skills}></Skills>
      {/* <Stats></Stats> */}
      <Contact ref={contact}></Contact>
      {/* <Footer></Footer>
      <Chatbot></Chatbot> */}
      {/* <Dummy></Dummy> */}
    </PageContainer>
  );
}

export default App;
