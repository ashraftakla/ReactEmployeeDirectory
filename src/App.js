import React from "react";
import Main from "./components/Main";
import "./App.css";
import Wrapper from "./components/wrapper";
import Header from "./components/header"
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">

        </div>
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </div>
    </div>
  );
}


export default App;
