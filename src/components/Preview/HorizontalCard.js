import React from "react";
import TipCard from "./Card";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { bannerState, contentState, titleState } from "../../recoil/atoms";
import { Image } from "semantic-ui-react";
import Markdown from "../common/Markdown";
import { themeColorState } from "../../recoil/selectors";
import Header from "./Header";

const Wrapper = styled(TipCard)`
  width: 660px;
  
  display: flex;
  
  img {
    width: 187px;
    height: 368px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
  
  & > div.content {
    flex: 1;
    padding: 24px;
  }
  
`;

export default function HorizontalCard() {
  const banner = useRecoilValue(bannerState);
  const title = useRecoilValue(titleState);
  const content = useRecoilValue(contentState);
  const primaryColor = useRecoilValue(themeColorState);

  return (
    <Wrapper>
      <Image src={banner} width={250} height={490} />
      <div className="content">
        <Header>{title}</Header>
        <Markdown
          isPreview={true}
          md={content}
          primaryColor={primaryColor}
        />
      </div>
    </Wrapper>
  )
}
