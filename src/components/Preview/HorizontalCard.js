import React from "react";
import TipCard from "./Card";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { bannerState, titleState } from "../../recoil/atoms";
import { Image } from "semantic-ui-react";

const Wrapper = styled(TipCard)`
  width: 880px;
  
  display: flex;
  
  img {
    width: 250px;
    height: 490px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
  
  & > div.content {
    padding: 48px;
    
    header {
      font-weight: bold;
      font-size: 22px;
      line-height: 36px;
      
      margin-bottom: 12px;
    }
  }
  
`;

export default function HorizontalCard() {
  const banner = useRecoilValue(bannerState);
  const title = useRecoilValue(titleState);

  return (
    <Wrapper>
      <Image src={banner} width={250} height={490} />
      <div className="content">
        <header>{title}</header>
        <main></main>
      </div>
    </Wrapper>
  )
}
