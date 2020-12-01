import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { nonOfficialState } from "../../recoil/atoms";
import { ReactComponent as Logo } from './logo.svg'

const Wrapper = styled.footer`
  border-top: 1px solid #EEEEEE;

  div.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 11px;
  }
  
  span {
    font-size: 10px;
    line-height: 20px;
    color: rgba(29, 37, 60, 0.24);
    margin-right: 8px;
  }

  div.claim {
    font-size: 6px;
    text-align: center;
    color: rgba(29, 37, 60, 0.24);
  }
`;

export default function Footer() {
  const nonOfficial = useRecoilValue(nonOfficialState);

  return (
    <Wrapper>
      <div className="logo">
        <span>Tip Card Powered by</span>
        <Logo />
      </div>
      {nonOfficial && <div className="claim">This is not an official claim</div>}
    </Wrapper>
  )
}
