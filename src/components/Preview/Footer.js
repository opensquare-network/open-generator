import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from './logo.svg'

const Wrapper = styled.footer`
  border-top: 1px solid #EEEEEE;
  display: flex;
  align-items: center;
  padding-top: 11px;
  
  span {
    font-size: 10px;
    line-height: 20px;
    color: rgba(29, 37, 60, 0.24);
    margin-right: 8px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
        <span>Tip Card Powered by</span>
        <Logo />
    </Wrapper>
  )
}
