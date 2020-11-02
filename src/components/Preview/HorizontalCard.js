import React from "react";
import TipCard from "./Card";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { bannerState, contentState, titleState } from "../../recoil/atoms";
import { Image } from "semantic-ui-react";
import Markdown from "../common/Markdown";
import { themeColorState } from "../../recoil/selectors";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled(TipCard)`
  width: 660px;
  
  display: flex;
  
  img {
    width: 187px;
    height: 368px;
  }
  
  & > div.content {
    flex: 1;
    padding: 24px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    
    .main {
      flex: 1;
    }
  }
  
`;

export default function HorizontalCard() {
  const banner = useRecoilValue(bannerState);
  const title = useRecoilValue(titleState);
  const content = useRecoilValue(contentState);
  const primaryColor = useRecoilValue(themeColorState);

  return (
    <Wrapper id="horizontal-card">
      <Image src={banner} width={250} height={490} />
      <div className="content">
        <Header>{title}</Header>
        <Markdown className="main"
          isPreview={true}
          md={content}
          primaryColor={primaryColor}
        />
        <Footer />
      </div>
    </Wrapper>
  )
}
