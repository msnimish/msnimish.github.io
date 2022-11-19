import About from "./Components/About";
import Chatbot from "./Components/Chatbot";
import Contact from "./Components/Contact";
import Dummy from "./Components/Dummy";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Stats from "./Components/Stats";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
`;

function App() {
  return (
    <Container>
      <Navbar style={{position:"sticky", top:"0"}}></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Stats></Stats>
      <Contact></Contact>
      <Footer></Footer>
      <Chatbot></Chatbot>
      <Dummy>
        <img src="./Images/hero.svg" alt="fullPage"></img>
      </Dummy>
    </Container>
  );
}

export default App;
