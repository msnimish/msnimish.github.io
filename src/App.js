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


const PageContainer = styled.div`
  width: 100vw;
  font-family: Montserrat;
`;

function App() {
  
  return (
    <PageContainer>
      {/* <Home></Home> */}
      <Navbar style={{ position: "sticky", top: "0" }}></Navbar>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      {/* <Projects></Projects>
      <Stats></Stats> */}
      <Contact></Contact>
      {/* <Footer></Footer>
      <Chatbot></Chatbot> */}
      {/* <Dummy></Dummy> */}
    </PageContainer>
  );
}

export default App;
