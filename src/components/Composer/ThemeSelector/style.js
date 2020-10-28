import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { bannerState, getDefaultBannerUrls, isVerticalState, tokenState } from "../../../recoil/atoms";

const Wrapper = styled.section`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 6px;
  margin-left: 10px;
  
  background: ${props => props.active ? props.bgColor : 'rgba(167, 167, 167, 0.12)'};
  cursor: pointer;
`;

const Inner = styled.section`
  width: ${p => p.vertical ? '14px' : '22px'};
  height: ${p => p.vertical ? '22px' : '14px'};;
  
  border: 2px solid ${p => p.active ? p.color : '#A7A7A7'};
  box-sizing: border-box;
  border-radius: 2px;
`;

export default function Style({ active = false, vertical = true, color, secondaryColor }) {
  const [, setVertical] = useRecoilState(isVerticalState);
  const token = useRecoilValue(tokenState);
  const [, setBanner] = useRecoilState(bannerState);

  return (
    <Wrapper
      bgColor={secondaryColor}
      active={active}
      onClick={() => {
      setBanner(getDefaultBannerUrls(token, vertical)[0]);
      setVertical(vertical)
    }}>
      <Inner active={active} vertical={vertical} color={color} />
    </Wrapper>
  )
}
