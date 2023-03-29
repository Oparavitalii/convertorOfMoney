import React from "react";
import Error from "../Components/Error/Error";
import Loader from "../Components/Loader/Loader";
import { useAppSelector } from "../Hooks/store";
import Home from "../Pages/Home/Home";
import { AppContainer, Container } from "./App.elements";

function App() {

 
  
 
  return (
    <AppContainer>
      <Container>
         <Home />
      </Container>
    </AppContainer>
  );
}

export default App;
