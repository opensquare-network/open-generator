import React from "react";
import TipCard from "./Card";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { bannerState, contentState, titleState } from "../../recoil/atoms";
import { Image } from "semantic-ui-react";
import Header from "./Header";
import Markdown from "../common/Markdown";
import { themeColorState } from "../../recoil/selectors";
import Footer from "./Footer";

const Wrapper = styled(TipCard)`
  width: 320px;
  
  display: flex;
  flex-direction: column;
  
  img {
    width: 320px;
    height: 148px;
  }
  
  & > div.content {
    display: flex;
    flex-direction: column;
    min-height: 320px;
    padding: 16px 24px;
    
    .main {
      flex: 1;
    }
  }
`;

export default function VerticalCard() {
  const banner = useRecoilValue(bannerState);
  const title = useRecoilValue(titleState);
  const content = useRecoilValue(contentState);
  const primaryColor = useRecoilValue(themeColorState);

  return (
    <Wrapper id="vertical-card">
      <Image src={banner} width={320} height={148} />
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
