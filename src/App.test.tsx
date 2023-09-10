import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

function Navbar() {
  return <div>Navbar</div>;
}

export { Navbar };
export default App;
