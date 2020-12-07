import React from "react";
import TipCard from "./Card";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { bannerState, titleState, isSignatureState, signatureState, nonOfficialState } from "../../recoil/atoms";
import { contentImageState } from "../../recoil/selectors";
import { Image } from "semantic-ui-react";
import Markdown from "../common/Markdown";
import { themeColorState } from "../../recoil/selectors";
import Header from "./Header";
import Footer from "./Footer";
import ExtraInfo from "./ExtraInfo";
import Signature from "./Signature";
import NonOfficialClaim from "./NonOfficialClaim";

const Wrapper = styled(TipCard)`
  width: 660px;
  margin: auto;
  
  display: flex;
  
  img {
    width: 187px;
    height: 100%;
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
  const primaryColor = useRecoilValue(themeColorState);
  const isSignature = useRecoilValue(isSignatureState);
  const signature = useRecoilValue(signatureState);
  const nonOfficial = useRecoilValue(nonOfficialState);
  const contentImage = useRecoilValue(contentImageState);

  return (
    <Wrapper id="horizontal-card">
      <div className="banner">
        <Image src={banner} />
      </div>
      <div className="content">
        <Header>{title}</Header>
        <Markdown className="main"
          isPreview={true}
          md={contentImage.content}
          primaryColor={primaryColor}
          images={contentImage.images}
        />
        <ExtraInfo show={(signature && isSignature) || nonOfficial}>
          <Signature name={signature} show={isSignature} />
          <NonOfficialClaim show={nonOfficial} />
        </ExtraInfo>
        <Footer />
      </div>
    </Wrapper>
  )
}
