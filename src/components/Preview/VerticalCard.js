import React from "react";
import TipCard from "./Card";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { bannerState, contentState, titleState } from "../../recoil/atoms";
import { Image } from "semantic-ui-react";
import Header from "./Header";
import Markdown from "../common/Markdown";
import { themeColorState } from "../../recoil/selectors";

const Wrapper = styled(TipCard)`
  width: 320px;
  
  display: flex;
  flex-direction: column;
  
  img {
    width: 320px;
    height: 148px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  & > div.content {
    min-height: 320px;
    padding: 16px 24px;
  }
`;

export default function VerticalCard() {
  const banner = useRecoilValue(bannerState);
  const title = useRecoilValue(titleState);
  const content = useRecoilValue(contentState);
  const primaryColor = useRecoilValue(themeColorState);

  return (
    <Wrapper>
      <Image src={banner} width={320} height={148} />
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
