import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isVerticalState } from "../../recoil/atoms";
import VerticalCard from "./VerticalCard";
import HorizontalCard from "./HorizontalCard"

const Wrapper = styled.section`
  flex: 1;
  padding: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  overflow-x: scroll;
  
  background: #EEEEEE;
`;

export default function Preview() {
  const isVertical = useRecoilValue(isVerticalState);

  return (
    <Wrapper>
      {
        isVertical ? <VerticalCard /> : <HorizontalCard />
      }
    </Wrapper>
  )
}
