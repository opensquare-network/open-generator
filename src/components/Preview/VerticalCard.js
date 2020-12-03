import React from "react";
import TipCard from "./Card";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { bannerState, contentState, titleState, tokenState, isSignatureState, signatureState, nonOfficialState } from "../../recoil/atoms";
import { Image } from "semantic-ui-react";
import Header from "./Header";
import Markdown from "../common/Markdown";
import { themeColorState } from "../../recoil/selectors";
import Footer from "./Footer";
import ExtraInfo from "./ExtraInfo";
import Signature from "./Signature";
import NonOfficialClaim from "./NonOfficialClaim";

const Wrapper = styled(TipCard)`
  width: 320px;
  margin: auto;
  
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
  const token = useRecoilValue(tokenState);
  const isSignature = useRecoilValue(isSignatureState);
  const signature = useRecoilValue(signatureState);
  const nonOfficial = useRecoilValue(nonOfficialState);

  const linkColor = token === 'pha' ? 'rgba(0, 0, 0, 0.84)' : primaryColor

  return (
    <Wrapper id="vertical-card">
      <Image src={banner} width={320} height={148} />
      <div className="content">
        <Header>{title}</Header>
        <Markdown className="main"
          isPreview={true}
          md={content}
          primaryColor={linkColor}
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
