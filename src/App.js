import { Container } from "@chakra-ui/react";
import Chatbot from "./Components/Chatbot";
import Dummy from "./Components/Dummy";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <Container maxW={"100vw"} p={"0px"}>
      <Navbar maxW={"100vw"}></Navbar>
      {/* <Dummy></Dummy> */}
      <Footer></Footer>
      <Chatbot></Chatbot>
    </Container>
  );
}

export default App;
