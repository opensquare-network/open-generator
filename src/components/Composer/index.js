import React from "react";
import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";

const Wrapper = styled.div`
  padding: 20px 60px;
  width: 434px;
  overflow-y: auto;
`;

export default function Composer() {
  return (
    <Wrapper>
      <ThemeSelector />
    </Wrapper>
  )
}

