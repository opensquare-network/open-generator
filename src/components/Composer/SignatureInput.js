import React from "react";
import styled from "styled-components";
import { Checkbox, Input } from "semantic-ui-react";
import { useRecoilState } from "recoil";

import Title from "../common/Title";
import { isSignatureState, signatureState } from "../../recoil/atoms";

const Wrapper = styled.div`
  margin-top: 20px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export default function SignatureInput() {
  const [isSignature, setIsSignature] = useRecoilState(isSignatureState);
  const [signature, setSignature] = useRecoilState(signatureState);

  const onToggle = () => setIsSignature(!isSignature);
  const onChange = (e) => {
    setSignature(e.target.value);
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Title title="Signature" />
        <Checkbox slider checked={isSignature} onChange={onToggle} />
      </TitleWrapper>
      {isSignature && <Input fluid={true} placeholder="Please fill in your signature..." value={signature} onChange={onChange} />}
    </Wrapper>
  )
}