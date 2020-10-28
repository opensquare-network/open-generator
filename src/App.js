import React from "react";
import styled from 'styled-components';
import Footer from "./components/Footer"
import Composer from "./components/Composer";
import Preview from "./components/Preview";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.section`
  display: flex;
  overflow-y: auto;
  flex: 1;
`;

function App() {
  return (
    <Wrapper>
      <Content>
        <Composer />
        <Preview />
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default App;
