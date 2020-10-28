import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 64px;
  height: 64px;
  position: absolute;
  
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #EEE;
  border-radius: 32px;
  left: 402px;
  top: calc(50% - 92px);
  background: #FFF;
  
  color: rgba(29, 37, 60, 0.64);
  font-size: 12px;
`;

export default function PreviewBadge() {
  return (
    <Wrapper>Preview</Wrapper>
  )
}
