import styled from "styled-components";
import React from "react";
import { ReactComponent as Generator } from './open-generator.svg'

const Footer = styled.footer`
  height: 60px;
  background: #1D253C;
  
  display: flex;
  align-items: center;
  padding: 0 60px;
  
  & > span {
    color: rgba(255, 255, 255, 0.72);
    font-size: 14px;
    line-height: 24px;
    margin-left: 50px;
  }
`;

export default function PageFooter() {
  return (
    <Footer>
      <Generator />
      <span>Version v0.1</span>
    </Footer>
  )
}
