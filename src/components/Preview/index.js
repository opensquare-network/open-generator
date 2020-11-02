import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isVerticalState } from "../../recoil/atoms";
import VerticalCard from "./VerticalCard";
import HorizontalCard from "./HorizontalCard"
import { ReactComponent as Download } from './download.svg'

const Wrapper = styled.section`
  position: relative;
  
  flex: 1;
  padding: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  overflow-x: hidden;
  
  background: #EEEEEE;
  
  svg {
    position: absolute;
    right: 30px;
    bottom: 0;
    cursor: pointer;
  }
`;

export default function Preview() {
  const isVertical = useRecoilValue(isVerticalState);

  return (
    <Wrapper>
      {
        isVertical ? <VerticalCard /> : <HorizontalCard />
      }
      <Download />
    </Wrapper>
  )
}
