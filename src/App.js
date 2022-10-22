import { Container } from "@chakra-ui/react";
import Chatbot from "./Components/Chatbot";
import Dummy from "./Components/Dummy";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <Container maxW={"100vw"} p={"0px"}>
      <Navbar maxW={"100vw"}></Navbar>
      {/* <Dummy></Dummy> */}
      <Chatbot></Chatbot>
    </Container>
  );
}

export default App;
